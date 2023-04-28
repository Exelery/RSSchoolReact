import fsp from 'fs/promises';

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 5173;
const isTest = process.env.VITEST;

process.env.MY_CUSTOM_SECRET = 'API_KEY_qwertyuiop';

export async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === 'production'
) {
  const resolve = (p: string) => path.resolve(__dirname, p);

  const app = express();

  /**
   * @type {import('vite').ViteDevServer}
   */
  let vite;
  if (!isProd) {
    vite = await (
      await import('vite')
    ).createServer({
      root,
      logLevel: isTest ? 'error' : 'info',
      server: {
        middlewareMode: true,
        watch: {
          usePolling: true,
          interval: 100,
        },
      },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    app.use((await import('compression')).default());
    app.use(express.static(resolve('dist/client')));
  }

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;
      let template, render;
      if (!isProd) {
        template = await fsp.readFile(resolve('index.html'), 'utf8');
        template = await vite.transformIndexHtml(url, template);
        render = await vite.ssrLoadModule('src/entry-server.tsx').then((m) => m.render);
      } else {
        template = await fsp.readFile(resolve('dist/client/index.html'), 'utf8');
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        render = (await import('./dist/server/entry-server.js')).render;
      }
      try {
        const html = template.split(`<!--app-html-->`);

        res.status(200);
        res.setHeader('Content-Type', 'text/html');
        res.write(html[0]);
        const stream = await render(req, {
          onShellReady() {
            stream.pipe(res);
          },
          onShellError() {
            res.status(500);
            res.setHeader('content-type', 'text/html');
            res.send('<h1>Something went wrong</h1>');
          },
          onAllReady() {
            res.write(html[1]);
            res.end();
          },
          onError(err) {
            console.error(err);
          },
        });
      } catch (e) {
        if (e instanceof Response && e.status >= 300 && e.status <= 399) {
          return res.redirect(e.status, e.headers.get('Location') || ' ');
        }
        throw e;
      }
    } catch (e) {
      !isProd && vite.ssrFixStacktrace(e);
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  });

  return { app, vite };
}

if (!isTest) {
  createServer().then(({ app }) =>
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    })
  );
}
