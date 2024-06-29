import { classNames } from 'shared/lib/classNames';
import React, { memo, useMemo, useState } from 'react';
import { Button, ButtonSize, ButtonType } from 'shared/ui/button/Button';
import { ThemeSwitcher } from 'widgets/themeSwitcher';
import { LangSwitcher } from 'widgets/langSwitcher';
import { SideBarItem } from 'widgets/sidebar/sideBarItem/SideBarItem';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { getSideBarItems } from 'widgets/sidebar/model/selectors/sideBarItemsSelector/getSideBarItemSelector';
import cl from './SideBar.module.scss';

export interface SideBarProps {
    extraClassName?: string;
}

export const SideBar = memo(({ extraClassName }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sideBarItems = useSelector(getSideBarItems);

    const onToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div
            data-testid="side-bar"
            className={classNames(cl.SideBar, { [cl.collapsed]: collapsed }, [extraClassName])}
        >
            <div className={cl.links}>
                {sideBarItems.map(({ path, text, Icon }) => (
                    <SideBarItem
                        key={path}
                        path={path}
                        text={text}
                        Icon={Icon}
                        collapsed={collapsed}
                    />
                ))}
            </div>
            <Button
                onClick={onToggle}
                data-testid="toggle-btn"
                btnType={ButtonType.BACKGROUND_INVERTED}
                extraClassName={cl.collapseBtn}
                square
                buttonSize={ButtonSize.XL}
            >
                {collapsed ? '<' : '>'}
            </Button>
            <div className={cl.switchers}>
                <ThemeSwitcher />
                <LangSwitcher shortLang={collapsed} extraClassName={cl.lang} />
            </div>
        </div>
    );
});
