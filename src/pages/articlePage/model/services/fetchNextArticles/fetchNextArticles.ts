import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import {
    getArticlePageHasMore,
    getArticlePageIsLoading,
    getArticlePagePage,
} from '../../selectors/articlePageSelectors';
import { ArticlePageActions } from '../../slice/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticles = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlePage/fetchNextArticles',
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;

        const page = getArticlePagePage(getState());
        const hasMore = getArticlePageHasMore(getState());
        const isLoading = getArticlePageIsLoading(getState());

        if (hasMore && !isLoading) {
            const nextPage = page + 1;

            dispatch(ArticlePageActions.setPage(nextPage));
            dispatch(fetchArticlesList({ page: nextPage }));
        }
    },
);
