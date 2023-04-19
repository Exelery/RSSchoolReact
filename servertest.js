import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import renderApp from './dist/server/entry-server.js';
// import createFetchRequest from './request';
// import routes from './src/routes/test';

const PORT = process.env.PORT || 3001;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const html = fs.readFileSync(path.resolve(__dirname, './dist/client/index.html')).toString();

const parts = html.split('not rendered');

const app = express();

app.use('/assets', express.static(path.resolve(__dirname, './dist/client/assets')));
app.use((req, res) => {
  res.write(parts[0]);
  const stream = renderApp(req.url, {
    onShellReady() {
      stream.pipe(res);
    },
    onShellError() {
      // do error handling
    },
    onAllReady() {
      // last thing to write
      res.write(parts[1]);
      res.end();
    },
    onError(err) {
      console.error(err);
    },
  });
});

console.log(`listening on http://localhost:${PORT}`);
app.listen(PORT);
