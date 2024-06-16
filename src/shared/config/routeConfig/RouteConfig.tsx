import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/mainPage';
import { AboutPage } from 'pages/aboutPage';

export enum RouteName {
    MAIN = 'main',
    ABOUT = 'about',
}

export const RoutePaths: Record<RouteName, string> = {
    [RouteName.MAIN]: '/',
    [RouteName.ABOUT]: '/about',
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
];
