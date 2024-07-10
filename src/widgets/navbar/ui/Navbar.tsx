import { classNames } from 'shared/lib/classNames';
import React, { memo, useCallback, useState } from 'react';
import {
    Button, ButtonSize, ButtonText, ButtonType,
} from 'shared/ui/button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Text, TextColor, TextSize } from 'shared/ui/text/Text';
import { LinkTheme, MyLink } from 'shared/ui/link/MyLink';
import { RoutePaths } from 'shared/config/routeConfig/RouteConfig';
import { HStack } from 'shared/ui/Stack/HStack/HStack';
import { NotificationPopover } from 'features/NotificationPopover';
import { AvatarMenu } from 'features/AvatarMenu';
import cl from './Navbar.module.scss';

export interface NavbarProps {
    extraClassName?: string;
}

export const Navbar = memo(({ extraClassName }: NavbarProps) => {
    const { t } = useTranslation();
    const [isOpen, setModalState] = useState(false);
    const userAuthData = useSelector(getUserAuthData);

    const onModalOpen = useCallback(() => {
        setModalState(true);
    }, []);

    const onModalClose = useCallback(() => {
        setModalState(false);
    }, []);

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
                <HStack gap={16} extraClassName={cl.actions}>
                    <NotificationPopover />
                    <AvatarMenu userData={userAuthData} />
                </HStack>
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
