import { StaticRouterProvider, createStaticHandler, StaticRouter } from 'react-router-dom/server';
import {
  RenderToPipeableStreamOptions,
  renderToPipeableStream,
  renderToString,
} from 'react-dom/server';
import App from './App';
import React from 'react';
import routes from './routes/test';

const { query, dataRoutes } = createStaticHandler(routes);

export function render(url: string, opts?: RenderToPipeableStreamOptions) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
console.log('server');
