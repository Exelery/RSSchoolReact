/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  StaticHandlerContext,
  StaticRouterProvider,
  createStaticHandler,
  createStaticRouter,
} from 'react-router-dom/server';
import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import type * as express from 'express';
import { Headers, Request, Response } from 'node-fetch';

import React from 'react';
import routes from './routes';

export async function render(request: express.Request, opt?: RenderToPipeableStreamOptions) {
  const { query, dataRoutes } = createStaticHandler(routes);
  const remixRequest = createFetchRequest(request);
  // @ts-expect-error
  const context = (await query(remixRequest)) as StaticHandlerContext;
  if (context instanceof Response) {
    throw context;
  }
  const router = createStaticRouter(dataRoutes, context);

  return renderToPipeableStream(
    <StaticRouterProvider router={router} context={context} nonce="the-nonce" />,
    opt
  );
}

export function createFetchRequest(req: express.Request): Request {
  const origin = `${req.protocol}://${req.get('host')}`;
  const url = new URL(req.originalUrl || req.url, origin);

  const controller = new AbortController();
  req.on('close', () => controller.abort());

  const headers = new Headers();

  for (const [key, values] of Object.entries(req.headers)) {
    if (values) {
      if (Array.isArray(values)) {
        for (const value of values) {
          headers.append(key, value);
        }
      } else {
        headers.set(key, values);
      }
    }
  }

  const init: RequestInit = {
    method: req.method,
    headers,
    signal: controller.signal,
  };

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    init.body = JSON.stringify(req.body);
  }
  // @ts-expect-error
  return new Request(url.href, init);
}
