import { StateSchema } from '@/app/providers/storeProvider';

export const getIsLoading = (state: StateSchema) => state.articleDetails?.isLoading;
export const getError = (state: StateSchema) => state.articleDetails?.error;
export const getArticleDetailsData = (state: StateSchema) => state.articleDetails?.article;
