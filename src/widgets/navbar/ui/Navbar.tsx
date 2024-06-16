import {classNames} from "shared/lib/classNames";
import cl from "./Navbar.module.scss"
import {LinkTheme, MyLink} from "shared/ui/link/MyLink";
import {ThemeSwitcher} from "widgets/themeSwitcher";
import React from "react";

export interface NavbarProps {
    extraClassName?: string;
}

export const Navbar = ({extraClassName}: NavbarProps) => {
    return (
        <div className={classNames(cl.Navbar, {}, [extraClassName])}>
            <ThemeSwitcher/>
            <div className={cl.links}>
                <MyLink to={"/"} extraClassName={cl.link} theme={LinkTheme.SECONDARY}>MainPage</MyLink>
                <MyLink to={"/about"} theme={LinkTheme.SECONDARY}>AboutPage</MyLink>
            </div>
        </div>
    );
};