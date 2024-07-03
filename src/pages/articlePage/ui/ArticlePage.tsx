import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList } from 'entities/Article';
import { DynamicReducersHandler } from 'shared/lib/components/DynamicReducersHandler';
import { useConditionalEffect } from 'shared/lib/hooks/useConditionalEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextColor } from 'shared/ui/text/Text';
import { Page } from 'widgets/Page/ui/Page';
import { initArticlePageState } from 'pages/articlePage/model/services/initArticlePageState/initArticlePageState';
import { ArticlePageFilters } from 'pages/articlePage/ui/ArticlePageFilters/ArticlePageFilters';
import { useSearchParams } from 'react-router-dom';
import { fetchNextArticles } from '../model/services/fetchNextArticles/fetchNextArticles';
import { ArticlePageReducer, articlePageSelectors } from '../model/slice/articlePageSlice';
import {
    getArticlePageError,
    getArticlePageIsLoading,
    getArticlePageView,
} from '../model/selectors/articlePageSelectors';
import cl from './ArticlePage.module.scss';

export interface ArticlePageProps {
    extraClassName?: string;
}

const reducers = {
    articlePage: ArticlePageReducer,
};

const ArticlePage = ({ extraClassName }: ArticlePageProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const articles = useSelector(articlePageSelectors.selectAll);
    const error = useSelector(getArticlePageError);
    const isLoading = useSelector(getArticlePageIsLoading);
    const viewType = useSelector(getArticlePageView);
    const [searchParams] = useSearchParams();

    useConditionalEffect(() => {
        dispatch(initArticlePageState(searchParams));
    });

    const infiniteScrollHandler = useCallback(() => {
        dispatch(fetchNextArticles());
    }, [dispatch]);

    if (error) {
        return (
            <Page
                scrollIntersectionHandler={infiniteScrollHandler}
                extraClassName={classNames(cl.ArticleDetailsPage, {}, [extraClassName])}
            >
                <Text
                    textColor={TextColor.ERROR}
                    title={t('Произошла ошибка при загрузке статей')}
                    text={t('Попробуйте обновить страницу.')}
                />
            </Page>
        );
    }

    return (
        <DynamicReducersHandler reducers={reducers} isRemove={false}>
            <Page
                scrollIntersectionHandler={infiniteScrollHandler}
                extraClassName={classNames(cl.ArticlePage, {}, [extraClassName])}
            >
                <div className={cl.header}>
                    <ArticlePageFilters />
                </div>
                <div className={cl.content}>
                    <ArticleList
                        isLoading={isLoading}
                        articles={articles}
                        viewType={viewType}
                    />
                </div>
            </Page>
        </DynamicReducersHandler>
    );
};

export default memo(ArticlePage);
