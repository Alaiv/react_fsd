import React, { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';

import { ArticleTypes } from '../../model/const/constants';

export interface PageArticleTabsProps {
    extraClassName?: string,
    value: ArticleTypes,
    onTabClickHandler: (tab: ArticleTypes) => void
}

export const PageArticleTabs = memo((props: PageArticleTabsProps) => {
    const { t } = useTranslation();
    const {
        extraClassName,
        value,
        onTabClickHandler,
    } = props;
    const tabs = useMemo<TabItem<ArticleTypes>[]>(() => [
        {
            value: ArticleTypes.ALL,
            content: t('Все'),
        },
        {
            value: ArticleTypes.IT,
            content: t('Айти'),
        },
        {
            value: ArticleTypes.MEDIA,
            content: t('Медиа'),
        },
        {
            value: ArticleTypes.SCIENCE,
            content: t('Наука'),
        },
    ], [t]);

    return (
        <div className={classNames('', {}, [extraClassName])}>
            <Tabs tabs={tabs} value={value} onTabClick={onTabClickHandler} />
        </div>
    );
});
