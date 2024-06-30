import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../../ui/ArticleListItem/ArticleListItem';
import { Article, ArticleViewType } from '../../model/types/types';
import cl from './ArticleList.module.scss';

export interface ArticleListProps {
    extraClassName?: string;
    viewType?: ArticleViewType;
    articles: Article[];
    isLoading?: boolean;
}

const renderSkeleton = (view: ArticleViewType) => {
    const arr = view === ArticleViewType.LINE
        ? Array(3).fill(0)
        : Array(9).fill(0);

    return (
        arr.map(() => <ArticleListItemSkeleton viewType={view} />)
    );
};

export const ArticleList = (props: ArticleListProps) => {
    const { t } = useTranslation();
    const {
        extraClassName,
        viewType = ArticleViewType.CARD,
        articles,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cl.ArticleList, {}, [extraClassName, cl[viewType]])}>
                {renderSkeleton(viewType)}
            </div>
        );
    }

    return (
        <div className={classNames(cl.ArticleList, {}, [extraClassName])}>
            {
                articles.length
                    ? articles.map((article) => <ArticleListItem article={article} viewType={viewType} />)
                    : null
            }
        </div>
    );
};
