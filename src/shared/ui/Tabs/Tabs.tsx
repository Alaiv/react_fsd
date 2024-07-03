import React, { ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Card, CardType } from 'shared/ui/Card/Card';
import cl from './Tabs.module.scss';

export interface TabItem<T extends string> {
    value: T,
    content: ReactNode
}

export interface TabsProps<T extends string> {
    extraClassName?: string,
    tabs: TabItem<T>[],
    value: T,
    onTabClick: (tabValue: T) => void
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
    const {
        value,
        extraClassName,
        tabs,
        onTabClick,
    } = props;

    const tabClickHandler = useCallback((tab: TabItem<T>) => () => {
        onTabClick(tab.value);
    }, [onTabClick]);

    return (
        <div className={classNames(cl.Tabs, {}, [extraClassName])}>
            {
                tabs.map((tab) => (
                    <Card
                        extraClassName={cl.tab}
                        onClick={tabClickHandler(tab)}
                        key={tab.value}
                        type={tab.value === value ? CardType.NORMAL : CardType.OUTLINE}
                    >
                        {tab.content}
                    </Card>
                ))
            }
        </div>
    );
};
