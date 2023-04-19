import { MainPage, AboutPage, FormsPage, ErrorPage } from '../pages';
import React from 'react';
const routes = [
    {
        path: '/',
        loader: mainLoader,
        element: React.createElement(MainPage, null),
    },
    {
        path: '/about',
        element: React.createElement(AboutPage, null),
    },
    {
        path: '/forms',
        element: React.createElement(FormsPage, null),
    },
    {
        path: '*',
        element: React.createElement(ErrorPage, null),
    },
];
const sleep = (n = 500) => new Promise((r) => setTimeout(r, n));
const rand = () => Math.round(Math.random() * 100);
async function mainLoader() {
    await sleep();
    return { data: `Home loader - random value ${rand()}` };
}
export default routes;
