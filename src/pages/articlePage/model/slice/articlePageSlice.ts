import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { Article } from 'entities/Article';
import { ArticleViewType } from 'entities/Article/model/types/types';
import { LOCAL_STORAGE_VIEW_KEY } from 'shared/const/localStorageConst';
import { fetchArticlesList, FetchArticlesListResult } from '../services/fetchArticlesList/fetchArticlesList';
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
        hasMore: true,
        _inited: false,
        page: 1,
        ids: [],
        entities: {},
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleViewType>) => {
            state.view = action.payload;
            localStorage.setItem(LOCAL_STORAGE_VIEW_KEY, JSON.stringify(action.payload));
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        init: (state) => {
            const currentView = localStorage.getItem(LOCAL_STORAGE_VIEW_KEY);
            const parsedView = currentView ? JSON.parse(currentView) : ArticleViewType.CARD;

            state.view = parsedView;
            state.limit = parsedView === ArticleViewType.LINE ? 3 : 9;
            state._inited = true;
        },
    },
    extraReducers: (builder) => builder
        .addCase(fetchArticlesList.pending, (state, _) => {
            state.error = '';
            state.isLoading = true;
        })
        .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<FetchArticlesListResult>) => {
            state.error = '';
            state.isLoading = false;

            articlesAdapter.addMany(state, action.payload.articles);
            state.hasMore = state.ids.length < +action.payload.totalCount;
        })
        .addCase(fetchArticlesList.rejected, (state, action: PayloadAction<string | undefined>) => {
            state.isLoading = false;
            state.error = action.payload;
        }),
});

export const { actions: ArticlePageActions } = ArticlePageSlice;
export const { reducer: ArticlePageReducer } = ArticlePageSlice;
