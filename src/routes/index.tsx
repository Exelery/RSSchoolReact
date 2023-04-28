import { RouteObject } from 'react-router-dom';
import { MainPage, AboutPage, FormsPage, ErrorPage } from '../pages';
import React from 'react';
import App from '../App';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'forms',
        element: <FormsPage />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
];

export const routerPaths = [
  {
    name: 'MainPage',
    path: '/',
  },
  {
    name: 'AboutPage',
    path: '/about',
  },
  {
    name: 'FormsPage',
    path: '/forms',
  },
  {
    name: 'ErrorPage',
    path: '*',
  },
];

export default routes;
