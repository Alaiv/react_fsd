import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/mainPage';
import { AboutPage } from 'pages/aboutPage';
import { NotFoundPage } from 'pages/notFoundPage';
import { ProfilePage } from 'pages/profilePage';
import { ArticlePage } from 'pages/articlePage';
import { ArticleDetailsPage } from 'pages/articleDetailsPage';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean
}

export enum RouteName {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLE = 'article',
    ARTICLE_DETAIL = 'articleDetail',
    NOT_FOUND = 'not-found',
}

export const RoutePaths: Record<RouteName, string> = {
    [RouteName.MAIN]: '/',
    [RouteName.ABOUT]: '/about',
    [RouteName.PROFILE]: '/profile',
    [RouteName.ARTICLE]: '/article',
    [RouteName.ARTICLE_DETAIL]: '/article/',
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
        path: RoutePaths.article,
        element: <ArticlePage />,
        authOnly: true,
    },
    {
        path: `${RoutePaths.articleDetail}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    {
        path: RoutePaths['not-found'],
        element: <NotFoundPage />,
    },
];
