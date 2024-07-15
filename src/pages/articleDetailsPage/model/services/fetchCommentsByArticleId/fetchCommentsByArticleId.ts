import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { ThunkConfig } from '@/app/providers/storeProvider';
import { LOCAL_STORAGE_USER_KEY } from '@/shared/const/localStorageConst';
import { IComment } from '../../types';

type idType = string | number | undefined

export const fetchCommentsByArticleId = createAsyncThunk<IComment[], idType, ThunkConfig<string>>(
    'articleComments/fetchComments',
    async (articleId, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        if (!articleId) {
            return rejectWithValue('error');
        }

        try {
            const response = await extra.api.get<IComment[]>('/comments', {
                headers: {
                    authorization: localStorage.getItem(LOCAL_STORAGE_USER_KEY) || '',
                },
                params: {
                    articleId,
                    _expand: 'user',
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(i18n.t('error fetching comments data'));
        }
    },
);
