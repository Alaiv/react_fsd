import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { ConsoleInput } from 'shared/ui/input/ConsoleInput/ConsoleInput';
import { ViewSwitcher } from 'widgets/viewSwitcher';
import { useSelector } from 'react-redux';
import {
    getArticlePageOrder,
    getArticlePageSearch,
    getArticlePageSort,
    getArticlePageType,
    getArticlePageView,
} from 'pages/articlePage/model/selectors/articlePageSelectors';
import { ArticleSortType, ArticleTypes, ArticleViewType } from 'entities/Article/model/types/types';
import { ArticlePageActions } from 'pages/articlePage/model/slice/articlePageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Card } from 'shared/ui/Card/Card';
import { fetchArticlesList } from 'pages/articlePage/model/services/fetchArticlesList/fetchArticlesList';
import { ArticleSortSelector } from 'entities/Article/ui/ArticleSortSelectors/ArticleSortSelector';
import { SortOrder } from 'shared/lib/types/sortOrderTypes';
import { useDebounce } from 'shared/lib/hooks/useDebounce';
import { PageArticleTabs } from 'entities/Article';
import cl from './ArticlePageFilters.module.scss';

export interface ArticlePageFiltersProps {
    extraClassName?: string
}

export const ArticlePageFilters = memo(({ extraClassName }: ArticlePageFiltersProps) => {
    const { t } = useTranslation();
    const viewType = useSelector(getArticlePageView);
    const dispatch = useAppDispatch();
    const searchValue = useSelector(getArticlePageSearch);
    const sort = useSelector(getArticlePageSort);
    const order = useSelector(getArticlePageOrder);
    const type = useSelector(getArticlePageType);

    const setViewHandler = useCallback((view: ArticleViewType) => {
        dispatch(ArticlePageActions.setView(view));
    }, [dispatch]);

    const fetchDebounce = useDebounce(() => dispatch(fetchArticlesList({ replace: true })), 500);
    const fetchData = useCallback(() => dispatch(fetchArticlesList({ replace: true })), [dispatch]);

    const setSearchHandler = useCallback((text: string) => {
        dispatch(ArticlePageActions.setSearch(text));
        dispatch(ArticlePageActions.setPage(1));
        fetchDebounce();
    }, [dispatch, fetchDebounce]);

    const setSortHandler = useCallback((sort: ArticleSortType) => {
        dispatch(ArticlePageActions.setSort(sort));
        dispatch(ArticlePageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const setOrderHandler = useCallback((order: SortOrder) => {
        dispatch(ArticlePageActions.setOrder(order));
        dispatch(ArticlePageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const setTypeHandler = useCallback((type: ArticleTypes) => {
        dispatch(ArticlePageActions.setType(type));
        dispatch(ArticlePageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    return (
        <div className={classNames(cl.ArticlePageFilters, {}, [extraClassName])}>
            <div className={cl.filters}>
                <ArticleSortSelector
                    sortCallback={setSortHandler}
                    orderCallback={setOrderHandler}
                    order={order}
                    sort={sort}
                />
                <ViewSwitcher
                    view={viewType}
                    onClick={setViewHandler}
                    extraClassName={cl.viewControls}
                />
            </div>
            <Card extraClassName={cl.search}>
                <ConsoleInput
                    placeholder={t('Поиск')}
                    onChange={setSearchHandler}
                    value={searchValue}
                />
            </Card>
            <PageArticleTabs extraClassName={cl.tabs} value={type} onTabClickHandler={setTypeHandler} />
        </div>
    );
});
