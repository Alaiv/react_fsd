import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { getArticlePageInited } from '../../selectors/articlePageSelectors';
import { ArticlePageActions } from '../../slice/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlePageState = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlePage/initArticlePageState',
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;

        const isInited = getArticlePageInited(getState());

        if (!isInited) {
            dispatch(ArticlePageActions.init());
            dispatch(fetchArticlesList({ page: 1 }));
        }
    },
);
