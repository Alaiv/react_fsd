import { classNames } from 'shared/lib/classNames';
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
        arr.map((_, i) => <ArticleListItemSkeleton key={i} viewType={view} />)
    );
};

export const ArticleList = (props: ArticleListProps) => {
    const {
        extraClassName,
        viewType = ArticleViewType.CARD,
        articles,
        isLoading,
    } = props;

    return (
        <div className={classNames(cl.ArticleList, {}, [extraClassName])}>
            {
                articles.length
                    ? articles.map((article) => (
                        <ArticleListItem
                            key={article.id}
                            article={article}
                            viewType={viewType}
                        />
                    ))
                    : null
            }
            {
                isLoading && (
                    <div
                        className={classNames(cl.ArticleList, {}, [extraClassName, cl[viewType]])}
                    >
                        {renderSkeleton(viewType)}
                    </div>
                )
            }
        </div>
    );
};
