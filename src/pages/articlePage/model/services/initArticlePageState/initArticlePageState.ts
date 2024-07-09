import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { SortOrder } from 'shared/lib/types/sortOrderTypes';
import { Logger } from 'sass';
import { ArticleSortType, ArticleTypes } from 'entities/Article/model/const/constants';
import { getArticlePageInited } from '../../selectors/articlePageSelectors';
import { ArticlePageActions } from '../../slice/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlePageState = createAsyncThunk<void, URLSearchParams | undefined, ThunkConfig<string>>(
    'articlePage/initArticlePageState',
    async (searchParams, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;

        const isInited = getArticlePageInited(getState());

        if (!isInited) {
            const sort = searchParams?.get('sort') as ArticleSortType || ArticleSortType.VIEWS;
            const order = searchParams?.get('order') as SortOrder || 'asc';
            const search = searchParams?.get('search') || '';
            const type = searchParams?.get('type') as ArticleTypes || ArticleTypes.ALL;

            dispatch(ArticlePageActions.setOrder(order));
            dispatch(ArticlePageActions.setSort(sort));
            dispatch(ArticlePageActions.setSearch(search));
            dispatch(ArticlePageActions.setType(type));
            dispatch(ArticlePageActions.init());

            dispatch(fetchArticlesList({ page: 1 }));
        }
    },
);
