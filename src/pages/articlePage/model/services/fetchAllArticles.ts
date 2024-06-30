import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Article } from 'entities/Article';

export const fetchAllArticles = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articlePage/fetchAllArticles',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            return rejectWithValue(i18n.t('error fetching articles data'));
        }
    },
);
