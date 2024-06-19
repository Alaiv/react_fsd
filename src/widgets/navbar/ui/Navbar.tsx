import { classNames } from 'shared/lib/classNames';
import { LinkTheme, MyLink } from 'shared/ui/link/MyLink';
import React from 'react';
import { useTranslation } from 'react-i18next';
import cl from './Navbar.module.scss';

export interface NavbarProps {
    extraClassName?: string;
}

export const Navbar = ({ extraClassName }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cl.Navbar, {}, [extraClassName])}>
            <div className={cl.links}>
                <MyLink to="/" extraClassName={cl.link} theme={LinkTheme.SECONDARY}>
                    {t('На главную')}
                </MyLink>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <MyLink to="/about" theme={LinkTheme.SECONDARY}>{t('О нас')}</MyLink>
            </div>
        </div>
    );
};