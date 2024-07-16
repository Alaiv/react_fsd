import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget } from 'react';
import { Text, TextSize } from '@/shared/ui/text/Text';
import { classNames } from '@/shared/lib/classNames';
import { ArticleViewType } from '../../model/const/constants';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../../ui/ArticleListItem/ArticleListItem';
import { Article } from '../../model/types/types';
import cl from './ArticleList.module.scss';

export interface ArticleListProps {
    extraClassName?: string;
    viewType?: ArticleViewType;
    articles: Article[];
    isLoading?: boolean;
    error?: string;
    target?: HTMLAttributeAnchorTarget,
}

const renderSkeleton = (view: ArticleViewType) => {
    const arr = view === ArticleViewType.LINE
        ? Array(3).fill(0)
        : Array(9).fill(0);

    return (
        arr.map((_, i) => <ArticleListItemSkeleton key={i} viewType={view} />)
    );
};

export const ArticleList = (props: ArticleListProps) => {
    const {
        extraClassName,
        viewType = ArticleViewType.CARD,
        articles = [],
        isLoading,
        error,
        target,
    } = props;
    const { t } = useTranslation();

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cl.ArticleList, {}, [extraClassName])}>
                <Text title={t('Статьи не найдены')} size={TextSize.L} />
            </div>
        );
    }

    return (
        <div className={classNames(cl.ArticleList, {}, [extraClassName, cl[viewType]])}>
            {articles.map((article, i) => (
                <ArticleListItem
                    article={article}
                    viewType={viewType}
                    target={target}
                    key={article.id}
                    extraClassName={cl.card}
                />
            ))}
            {isLoading && renderSkeleton(viewType)}
        </div>
    );
};
