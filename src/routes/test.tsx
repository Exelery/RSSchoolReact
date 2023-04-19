import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { MainPage, AboutPage, FormsPage, ErrorPage } from '../pages';
import React from 'react';

const routes: RouteObject[] = [
  {
    path: '/',
    loader: mainLoader,
    element: <MainPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/forms',
    element: <FormsPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
];

const sleep = (n = 500) => new Promise((r) => setTimeout(r, n));
const rand = () => Math.round(Math.random() * 100);

async function mainLoader() {
  await sleep();
  return { data: `Home loader - random value ${rand()}` };
}

export default routes;
