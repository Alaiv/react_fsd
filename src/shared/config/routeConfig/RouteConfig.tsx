import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/mainPage';
import { AboutPage } from 'pages/aboutPage';
import { NotFoundPage } from 'pages/notFoundPage';

export enum RouteName {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not-found',
}

export const RoutePaths: Record<RouteName, string> = {
    [RouteName.MAIN]: '/',
    [RouteName.ABOUT]: '/about',
    [RouteName.NOT_FOUND]: '*',
};

export const AppRoutes: Array<RouteProps> = [
    {
        path: RoutePaths.main,
        element: <MainPage />,
    },
    {
        path: RoutePaths.about,
        element: <AboutPage />,
    },
    {
        path: RoutePaths['not-found'],
        element: <NotFoundPage />,
    },
];
