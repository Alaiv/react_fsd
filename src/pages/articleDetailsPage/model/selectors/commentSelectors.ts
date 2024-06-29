import { StateSchema } from 'app/providers/storeProvider';

export const getIsLoading = (state: StateSchema) => state?.articleComments?.isLoading;
export const getError = (state: StateSchema) => state?.articleComments?.error;
