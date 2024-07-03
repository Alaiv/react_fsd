import { combineReducers } from '@reduxjs/toolkit';
import {
    ArticleDetailsCommentSliceReducer,
    ArticleDetailsPageSchema,
    ArticleDetailsRecommendationsSliceReducer,
} from 'pages/articleDetailsPage';

export const ArticleDetailsPageReducer = combineReducers < ArticleDetailsPageSchema >({
    articleRecommendations: ArticleDetailsRecommendationsSliceReducer,
    articleComments: ArticleDetailsCommentSliceReducer,
});
