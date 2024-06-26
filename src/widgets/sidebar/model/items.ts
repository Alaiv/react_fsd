import { FunctionComponent, SVGAttributes } from 'react';
import { RoutePaths } from 'shared/config/routeConfig/RouteConfig';
import About from 'shared/assets/icons/About.svg';
import Home from 'shared/assets/icons/Home.svg';
import Profile from 'shared/assets/icons/profile_icon.svg';
import Article from 'shared/assets/icons/articles_icon.svg';

export interface ISideBarItem {
    path: string,
    text: string,
    Icon: FunctionComponent<SVGAttributes<SVGElement>>,
    authOnly?: boolean
}

export const sideBarItems: ISideBarItem[] = [
    {
        path: RoutePaths.main,
        text: 'На главную',
        Icon: Home,
    },
    {
        path: RoutePaths.about,
        text: 'О нас',
        Icon: About,
    },
    {
        path: RoutePaths.profile,
        text: 'Профиль',
        Icon: Profile,
        authOnly: true,
    },
    {
        path: RoutePaths.article,
        text: 'Статьи',
        Icon: Article,
        authOnly: true,
    },
];
