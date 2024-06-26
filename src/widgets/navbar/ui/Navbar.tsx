import { classNames } from 'shared/lib/classNames';
import React, { memo, useCallback, useState } from 'react';
import {
    Button, ButtonSize, ButtonText, ButtonType,
} from 'shared/ui/button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, UserAction } from 'entities/User';
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

    if (userAuthData) {
        return (
            <header className={classNames(cl.Navbar, {}, [extraClassName])}>
                <Button
                    btnType={ButtonType.CLEAR}
                    btnText={ButtonText.INVERTED}
                    onClick={onLogout}
                    extraClassName={cl.loginBtn}
                    buttonSize={ButtonSize.L}
                >
                    {t('Выйти')}
                </Button>
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
