import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import routes from './routes';

hydrate();

async function hydrate() {
  const router = createBrowserRouter(routes);

  ReactDOM.hydrateRoot(
    document.getElementById('root') as HTMLElement,
    <RouterProvider router={router} />
  );

  console.log('hydrated');
}
