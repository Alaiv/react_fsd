import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { RoutePaths } from '@/shared/config/routeConfig/RouteConfig';
import Home from '@/shared/assets/icons/Home.svg';
import About from '@/shared/assets/icons/About.svg';
import Profile from '@/shared/assets/icons/profile_icon.svg';
import Article from '@/shared/assets/icons/articles_icon.svg';
import { ISideBarItem } from '../../../model/items';

export const getSideBarItems = createSelector(
    getUserAuthData,
    (auth) => {
        const sideBarItems: ISideBarItem[] = [
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
        ];

        if (auth) {
            sideBarItems.push(
                {
                    path: `${RoutePaths.profile}${auth?.id}`,
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
            );
        }

        return sideBarItems;
    },
);
