import { MainPage, AboutPage, FormsPage, ErrorPage } from '../pages';
const router = [
    {
        name: 'MainPage',
        path: '/',
        element: MainPage,
    },
    {
        name: 'AboutPage',
        path: '/about',
        element: AboutPage,
    },
    {
        name: 'FormsPage',
        path: '/forms',
        element: FormsPage,
    },
    {
        name: 'ErrorPage',
        path: '*',
        element: ErrorPage,
    },
];
export default router;
