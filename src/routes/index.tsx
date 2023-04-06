import React from 'react';

import { MainPage, AboutPage, FormsPage, ErrorPage } from '@/pages';

export default [
  {
    name: 'MainPage',
    path: '/',
    element: <MainPage />,
  },
  {
    name: 'AboutPage',
    path: '/about',
    element: <AboutPage />,
  },
  {
    name: 'FormsPage',
    path: '/forms',
    element: <FormsPage />,
  },
  {
    name: 'ErrorPage',
    path: '*',
    element: <ErrorPage />,
  },
];
