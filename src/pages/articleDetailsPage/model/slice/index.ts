import { combineReducers } from '@reduxjs/toolkit';
import {
    ArticleDetailsCommentSliceReducer,
} from './ArticleDetailsCommentSlice';

import {
    ArticleDetailsRecommendationsSliceReducer,
} from './ArticleDetailsRecommendationsSlice';

import {
    ArticleDetailsPageSchema,
} from '../types';

export const ArticleDetailsPageReducer = combineReducers < ArticleDetailsPageSchema >({
    articleRecommendations: ArticleDetailsRecommendationsSliceReducer,
    articleComments: ArticleDetailsCommentSliceReducer,
});
