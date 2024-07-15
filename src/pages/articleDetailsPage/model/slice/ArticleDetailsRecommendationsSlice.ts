import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/storeProvider';
import { Article } from '@/entities/Article';
import { ArticleRecommendationSchema } from '../../model/types';
import { fetchArticleRecommendationsList } from '../../model/services/fetchRecommendations/fetchRecommendations';

const recommendationsAdapter = createEntityAdapter({
    selectId: (article: Article) => article.id,
});

export const recommendationSelectors = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.articleRecommendations || recommendationsAdapter.getInitialState(),
);

export const ArticleDetailsRecommendationsSlice = createSlice({
    name: 'articleDetailsPage/recomendations',
    initialState: recommendationsAdapter.getInitialState<ArticleRecommendationSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendationsList.pending, (state, _) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendationsList.fulfilled, (state, action: PayloadAction<Array<Article>>) => {
                state.error = '';
                state.isLoading = false;

                recommendationsAdapter.setMany(state, action.payload);
            })
            .addCase(fetchArticleRecommendationsList.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: ArticleDetailsRecommendationsSliceActions } = ArticleDetailsRecommendationsSlice;
export const { reducer: ArticleDetailsRecommendationsSliceReducer } = ArticleDetailsRecommendationsSlice;
