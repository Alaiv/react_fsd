import { classNames } from 'shared/lib/classNames';
import React, { memo, useCallback, useState } from 'react';
import {
    Button, ButtonSize, ButtonText, ButtonType,
} from 'shared/ui/button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, UserAction } from 'entities/User';
import { Text, TextColor, TextSize } from 'shared/ui/text/Text';
import { LinkTheme, MyLink } from 'shared/ui/link/MyLink';
import { AppRoutes, RoutePaths } from 'shared/config/routeConfig/RouteConfig';
import { AppMenu, AppMenuItem } from 'shared/ui/Menu/AppMenu';
import { Avatar } from 'shared/ui/avatar/Avatar';
import { navigate } from '@storybook/addon-links';
import cl from './Navbar.module.scss';

export interface NavbarProps {
    extraClassName?: string;
}

export const Navbar = memo(({ extraClassName }: NavbarProps) => {
    const { t } = useTranslation();
    const [isOpen, setModalState] = useState(false);
    const userAuthData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onModalOpen = useCallback(() => {
        setModalState(true);
    }, []);

    const onModalClose = useCallback(() => {
        setModalState(false);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(UserAction.removeAuthData());
    }, [dispatch]);

    const menuItems: AppMenuItem[] = [
        {
            content: t('Профиль'),
            href: `${RoutePaths.profile}${userAuthData?.id}`,
        },
        {
            content: t('Выйти'),
            onClick: onLogout,
        },
    ];

    if (userAuthData) {
        return (
            <header className={classNames(cl.Navbar, {}, [extraClassName])}>
                <Text
                    title={t('Alaiv app')}
                    size={TextSize.L}
                    textColor={TextColor.INVERTED}
                    extraClassName={cl.title}
                />
                <MyLink to={RoutePaths.articleNew} theme={LinkTheme.SECONDARY}>
                    {t('Создать статьи')}
                </MyLink>
                <AppMenu
                    direction="down left"
                    extraClassName={cl.loginBtn}
                    items={menuItems}
                    trigger={<Avatar alt={userAuthData.username} src={userAuthData.avatar} size={40} />}
                />
            </header>
        );
    }

    return (
        <header className={classNames(cl.Navbar, {}, [extraClassName])}>
            <Button
                btnType={ButtonType.CLEAR}
                btnText={ButtonText.INVERTED}
                onClick={onModalOpen}
                extraClassName={cl.loginBtn}
                buttonSize={ButtonSize.L}
            >
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isOpen} onClose={onModalClose} />
        </header>
    );
});
