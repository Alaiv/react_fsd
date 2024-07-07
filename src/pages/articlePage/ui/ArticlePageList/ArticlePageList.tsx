import { memo } from 'react';
import { ArticleList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { articlePageSelectors } from '../../model/slice/articlePageSlice';
import { getArticlePageIsLoading, getArticlePageView } from '../../model/selectors/articlePageSelectors';

interface ArticlePageListProps {
    extraClassName?: string;
}

export const ArticlePageList = memo((props: ArticlePageListProps) => {
    const { extraClassName } = props;
    const articles = useSelector(articlePageSelectors.selectAll);
    const isLoading = useSelector(getArticlePageIsLoading);
    const viewType = useSelector(getArticlePageView);

    return (
        <ArticleList
            isLoading={isLoading}
            articles={articles}
            viewType={viewType}
            extraClassName={extraClassName}
        />
    );
});
