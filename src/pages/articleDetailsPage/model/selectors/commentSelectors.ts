import { StateSchema } from 'app/providers/storeProvider';

export const getIsLoading = (state: StateSchema) => state?.comments?.isLoading;
export const getError = (state: StateSchema) => state?.comments?.error;
