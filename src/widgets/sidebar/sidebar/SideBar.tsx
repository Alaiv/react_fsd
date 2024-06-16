import {classNames} from "shared/lib/classNames";
import cl from "./SideBar.module.scss"
import React, {useState} from "react";
import {Button} from "shared/ui/button/Button";
import {ThemeSwitcher} from "widgets/themeSwitcher";
import {LangSwitcher} from "widgets/langSwitcher";

export interface SideBarProps {
    extraClassName?: string;
}

export const SideBar = ({extraClassName}: SideBarProps) => {
    const [expanded, setExpanded] = useState(false);

    const onToggle = () => {
        setExpanded(!expanded);
    }

    return (
        <div className={classNames(cl.SideBar, {[cl.collapsed]: expanded}, [extraClassName])}>
            <Button onClick={onToggle}> Collapse </Button>
            <div className={cl.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher extraClassName={cl.lang}/>
            </div>
        </div>
    );
};