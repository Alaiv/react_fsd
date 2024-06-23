import { useTranslation } from 'react-i18next';
import { ISideBarItem } from 'widgets/sidebar/model/items';
import { LinkTheme, MyLink } from 'shared/ui/link/MyLink';
import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import cl from './SideBarItem.module.scss';

export interface SideBarItemProps extends ISideBarItem{
    collapsed: boolean;
}

export const SideBarItem = memo((props: SideBarItemProps) => {
    const { t } = useTranslation();
    const {
        text,
        Icon,
        path,
        collapsed,
    } = props;

    return (
        <MyLink
            to={path}
            theme={LinkTheme.SECONDARY}
            className={cl.SideBarItem}
        >
            <Icon className={cl.icon} />
            <span className={classNames(cl.link, { [cl.collapsedLink]: collapsed })}>
                {t(text)}
            </span>
        </MyLink>
    );
});
