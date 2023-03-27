import React from 'react';

import MainPage from '@/pages/MainPage';
import AboutPage from '@/pages/AboutPage';
import FormsPage from '../pages/FormsPage';
import ErrorPage from '../pages/ErrorPage';

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
