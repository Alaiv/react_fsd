import { StateSchema } from '@/app/providers/storeProvider';

export const getRecommendationsIsLoading = (state: StateSchema) => state
    ?.articleDetailsPage
    ?.articleRecommendations
    .isLoading;

export const getRecommendationsError = (state: StateSchema) => state
    ?.articleDetailsPage
    ?.articleRecommendations
    .error;
