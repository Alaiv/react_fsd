import { classNames } from 'shared/lib/classNames';
import React, { useState } from 'react';
import { Button, ButtonSize, ButtonType } from 'shared/ui/button/Button';
import { ThemeSwitcher } from 'widgets/themeSwitcher';
import { LangSwitcher } from 'widgets/langSwitcher';
import { LinkTheme, MyLink } from 'shared/ui/link/MyLink';
import { useTranslation } from 'react-i18next';
import { RoutePaths } from 'shared/config/routeConfig/RouteConfig';
import About from 'shared/assets/icons/About.svg';
import Home from 'shared/assets/icons/Home.svg';
import cl from './SideBar.module.scss';

export interface SideBarProps {
    extraClassName?: string;
}

export const SideBar = ({ extraClassName }: SideBarProps) => {
    const [expanded, setExpanded] = useState(false);
    const { t } = useTranslation();
    const onToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <div
            data-testid="side-bar"
            className={classNames(cl.SideBar, { [cl.collapsed]: expanded }, [extraClassName])}
        >
            <div className={cl.links}>
                <MyLink
                    to={RoutePaths.main}
                    theme={LinkTheme.SECONDARY}
                >
                    <Home className={cl.icon} />
                    <span className={cl.link}>
                        {t('На главную')}
                    </span>
                </MyLink>
                <MyLink
                    to={RoutePaths.about}
                    theme={LinkTheme.SECONDARY}
                >
                    <About className={cl.icon} />
                    <span className={cl.link}>
                        {t('О нас')}
                    </span>
                </MyLink>
            </div>
            <Button
                onClick={onToggle}
                data-testid="toggle-btn"
                btnType={ButtonType.BACKGROUND_INVERTED}
                extraClassName={cl.collapseBtn}
                square
                buttonSize={ButtonSize.XL}
            >
                {expanded ? '<' : '>'}
            </Button>
            <div className={cl.switchers}>
                <ThemeSwitcher />
                <LangSwitcher shortLang={expanded} extraClassName={cl.lang} />
            </div>
        </div>
    );
};
