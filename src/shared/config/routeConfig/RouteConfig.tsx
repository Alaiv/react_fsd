import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/mainPage';
import { AboutPage } from 'pages/aboutPage';
import { NotFoundPage } from 'pages/notFoundPage';
import { ProfilePage } from 'pages/profilePage';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean
}

export enum RouteName {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND = 'not-found',
}

export const RoutePaths: Record<RouteName, string> = {
    [RouteName.MAIN]: '/',
    [RouteName.ABOUT]: '/about',
    [RouteName.PROFILE]: '/profile',
    [RouteName.NOT_FOUND]: '*',
};

export const AppRoutes: Array<AppRouteProps> = [
    {
        path: RoutePaths.main,
        element: <MainPage />,
    },
    {
        path: RoutePaths.about,
        element: <AboutPage />,
    },
    {
        path: RoutePaths.profile,
        element: <ProfilePage />,
        authOnly: true,
    },
    {
        path: RoutePaths['not-found'],
        element: <NotFoundPage />,
    },
];
