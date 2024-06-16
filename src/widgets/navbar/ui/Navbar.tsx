import {classNames} from "shared/lib/classNames";
import cl from "./Navbar.module.scss"
import {LinkTheme, MyLink} from "shared/ui/link/MyLink";

export interface NavbarProps {
    extraClassName?: string;
}

export const Navbar = ({extraClassName}: NavbarProps) => {
    return (
        <div className={classNames(cl.Navbar, {}, [extraClassName])}>
            <div>
                <MyLink to={"/"} extraClassName={cl.link} theme={LinkTheme.SECONDARY}>MainPage</MyLink>
                <MyLink to={"/about"} theme={LinkTheme.SECONDARY}>AboutPage</MyLink>
            </div>
        </div>
    );
};