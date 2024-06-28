import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { ThunkConfig } from 'app/providers/storeProvider';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localStorageConst';
import { Article } from '../types/types';

export const fetchArticlesData = createAsyncThunk<Article, number | string, ThunkConfig<string>>(
    'profile/fetchArticlesData',
    async (articleId, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<Article>(`/articles/${articleId}`, {
                headers: {
                    authorization: localStorage.getItem(LOCAL_STORAGE_USER_KEY) || '',
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(i18n.t('error fetching articles data'));
        }
    },
);
