import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchArticlesData } from '../../model/services/fetchArticlesData';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { Article } from '../types/types';

const initialState: ArticleDetailsSchema = {
    isLoading: false,
    error: undefined,
    article: undefined,
};

const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesData.pending, (state, _) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchArticlesData.fulfilled, (state, action: PayloadAction<Article>) => {
                state.error = '';
                state.isLoading = false;

                state.article = action.payload;
            })
            .addCase(fetchArticlesData.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: ArticleDetailsActions } = articleDetailsSlice;
export const { reducer: ArticleDetailsReducer } = articleDetailsSlice;
