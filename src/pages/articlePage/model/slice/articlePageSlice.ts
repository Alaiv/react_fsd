import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { Article } from 'entities/Article';
import { ArticleViewType } from 'entities/Article/model/types/types';
import { LOCAL_STORAGE_VIEW_KEY } from 'shared/const/localStorageConst';
import { fetchAllArticles } from '../../model/services/fetchAllArticles';
import { ArticlePageSchema } from '../../model/types/articlePageSchema';

const articlesAdapter = createEntityAdapter({
    selectId: (article: Article) => article.id,
});

export const articlePageSelectors = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlePage || articlesAdapter.getInitialState(),
);

export const ArticlePageSlice = createSlice({
    name: 'articlePage',
    initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
        isLoading: false,
        error: undefined,
        view: ArticleViewType.CARD,
        ids: [],
        entities: {},
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleViewType>) => {
            state.view = action.payload;
            localStorage.setItem(LOCAL_STORAGE_VIEW_KEY, JSON.stringify(action.payload));
        },
        init: (state) => {
            const currentView = localStorage.getItem(LOCAL_STORAGE_VIEW_KEY);
            state.view = currentView ? JSON.parse(currentView) : ArticleViewType.CARD;
        },
    },
    extraReducers: (builder) => builder
        .addCase(fetchAllArticles.pending, (state, _) => {
            state.error = '';
            state.isLoading = true;
        })
        .addCase(fetchAllArticles.fulfilled, (state, action: PayloadAction<Array<Article>>) => {
            state.error = '';
            state.isLoading = false;

            articlesAdapter.setMany(state, action.payload);
        })
        .addCase(fetchAllArticles.rejected, (state, action: PayloadAction<string | undefined>) => {
            state.isLoading = false;
            state.error = action.payload;
        }),
});

export const { actions: ArticlePageActions } = ArticlePageSlice;
export const { reducer: ArticlePageReducer } = ArticlePageSlice;
