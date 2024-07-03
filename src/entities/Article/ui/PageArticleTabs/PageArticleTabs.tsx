import React, { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { ArticleTypes } from 'entities/Article/model/types/types';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';

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
