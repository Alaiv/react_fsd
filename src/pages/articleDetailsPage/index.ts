export { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDetailsPageAsync';
export type { ArticleCommentSchema, ArticleRecommendationSchema, ArticleDetailsPageSchema } from './model/types';
export {
    ArticleDetailsRecommendationsSliceReducer,
    ArticleDetailsRecommendationsSliceActions,
} from './model/slice/ArticleDetailsRecommendationsSlice';

export {
    ArticleDetailsCommentSliceReducer,
    CommentSliceActions,
} from './model/slice/ArticleDetailsCommentSlice';
