import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames';
import { Button, ButtonSize, ButtonType } from '@/shared/ui/button/Button';
import { ThemeSwitcher } from '@/widgets/themeSwitcher';
import { LangSwitcher } from '@/widgets/langSwitcher';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { SideBarItem } from '../sideBarItem/SideBarItem';
import { getSideBarItems } from '../model/selectors/sideBarItemsSelector/getSideBarItemSelector';
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
        <aside
            data-testid="side-bar"
            className={classNames(cl.SideBar, { [cl.collapsed]: collapsed }, [extraClassName])}
        >
            <VStack role="navigation" extraClassName={cl.links} gap={4}>
                {sideBarItems.map(({ path, text, Icon }) => (
                    <SideBarItem
                        key={path}
                        path={path}
                        text={text}
                        Icon={Icon}
                        collapsed={collapsed}
                    />
                ))}
            </VStack>
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
            <HStack extraClassName={cl.switchers}>
                <ThemeSwitcher />
                <LangSwitcher shortLang={collapsed} extraClassName={cl.lang} />
            </HStack>
        </aside>
    );
});
