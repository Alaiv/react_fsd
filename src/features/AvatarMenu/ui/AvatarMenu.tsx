import { useTranslation } from 'react-i18next';
import React, { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { AppMenu } from '@/shared/ui/Popups';
import cl from '@/widgets/navbar/ui/Navbar.module.scss';
import { Avatar } from '@/shared/ui/avatar/Avatar';
import { isAdmin, IUser, UserAction } from '@/entities/User';
import { RoutePaths } from '@/shared/config/routeConfig/RouteConfig';
import { AppMenuItem } from '@/shared/ui/Popups/ui/Menu/AppMenu';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { classNames } from '@/shared/lib/classNames';

interface AvatarMenuProps {
    extraClassName?: string;
    userData: IUser
}

export const AvatarMenu = memo((props: AvatarMenuProps) => {
    const { extraClassName, userData } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isUserAdmin = useSelector(isAdmin);

    const onLogout = useCallback(() => {
        dispatch(UserAction.removeAuthData());
    }, [dispatch]);

    const menuItems: AppMenuItem[] = useMemo(() => ([
        ...isUserAdmin
            ? [
                {
                    content: t('Админка'),
                    href: RoutePaths.admin,
                },
            ]
            : [],
        {
            content: t('Профиль'),
            href: `${RoutePaths.profile}${userData.id}`,
        },
        {
            content: t('Выйти'),
            onClick:
            onLogout,
        },
    ]), [isUserAdmin, onLogout, t, userData.id]);

    return (
        <AppMenu
            extraClassName={classNames(cl.AppMenu, {}, [extraClassName])}
            items={menuItems}
            trigger={<Avatar alt={userData.username} src={userData.avatar} size={40} />}
        />
    );
});
