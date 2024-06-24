import { classNames } from 'shared/lib/classNames';
import React, { memo, useMemo, useState } from 'react';
import { Button, ButtonSize, ButtonType } from 'shared/ui/button/Button';
import { ThemeSwitcher } from 'widgets/themeSwitcher';
import { LangSwitcher } from 'widgets/langSwitcher';
import { sideBarItems } from 'widgets/sidebar/model/items';
import { SideBarItem } from 'widgets/sidebar/sideBarItem/SideBarItem';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import cl from './SideBar.module.scss';

export interface SideBarProps {
    extraClassName?: string;
}

export const SideBar = memo(({ extraClassName }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const isAuth = useSelector(getUserAuthData);
    const onToggle = () => {
        setCollapsed(!collapsed);
    };

    const items = useMemo(() => sideBarItems.filter((item) => !(item.authOnly && !isAuth)), [isAuth]);

    return (
        <div
            data-testid="side-bar"
            className={classNames(cl.SideBar, { [cl.collapsed]: collapsed }, [extraClassName])}
        >
            <div className={cl.links}>
                {items.map(({ path, text, Icon }) => (
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
