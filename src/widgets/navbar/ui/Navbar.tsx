import {classNames} from "shared/lib/classNames";
import cl from "./Navbar.module.scss"
import {LinkTheme, MyLink} from "shared/ui/link/MyLink";
import React from "react";
import {useTranslation} from "react-i18next";

export interface NavbarProps {
    extraClassName?: string;
}

export const Navbar = ({extraClassName}: NavbarProps) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(cl.Navbar, {}, [extraClassName])}>
            <div className={cl.links}>
                <MyLink to={"/"} extraClassName={cl.link} theme={LinkTheme.SECONDARY}>{t('На главную')}</MyLink>
                <MyLink to={"/about"} theme={LinkTheme.SECONDARY}>{t('О нас')}</MyLink>
            </div>
        </div>
    );
};