import { FunctionComponent, SVGAttributes } from 'react';
import { RoutePaths } from 'shared/config/routeConfig/RouteConfig';
import About from 'shared/assets/icons/About.svg';
import Home from 'shared/assets/icons/Home.svg';

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
        Icon: About,
        authOnly: true,
    },
];
