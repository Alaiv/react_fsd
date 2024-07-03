import { StateSchema } from 'app/providers/storeProvider';

export const getIsLoading = (state: StateSchema) => state
    ?.articleDetailsPage
    ?.articleComments
    .isLoading;

export const getError = (state: StateSchema) => state
    ?.articleDetailsPage
    ?.articleComments
    .error;
