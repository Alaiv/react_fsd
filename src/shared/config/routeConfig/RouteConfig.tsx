import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/mainPage';
import { AboutPage } from 'pages/aboutPage';
import { NotFoundPage } from 'pages/notFoundPage';
import { ProfilePage } from 'pages/profilePage';
import { ArticlePage } from 'pages/articlePage';
import { ArticleDetailsPage } from 'pages/articleDetailsPage';
import { ArticleEditPage } from 'pages/articleEditPage';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean
}

export enum RouteName {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLE = 'article',
    ARTICLE_DETAIL = 'articleDetail',
    ARTICLE_EDIT = 'articleEdit',
    ARTICLE_NEW = 'articleNew',
    NOT_FOUND = 'not-found',
}

export const RoutePaths: Record<RouteName, string> = {
    [RouteName.MAIN]: '/',
    [RouteName.ABOUT]: '/about',
    [RouteName.PROFILE]: '/profile/',
    [RouteName.ARTICLE]: '/article',
    [RouteName.ARTICLE_DETAIL]: '/article/',
    [RouteName.ARTICLE_EDIT]: '/article/',
    [RouteName.ARTICLE_NEW]: '/article/new',
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
        path: `${RoutePaths.profile}:id`,
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
        path: `${RoutePaths.articleEdit}:id/edit`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    {
        path: `${RoutePaths.articleNew}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    {
        path: RoutePaths['not-found'],
        element: <NotFoundPage />,
    },
];
