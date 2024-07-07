import { StateSchema } from 'app/providers/storeProvider';

export const getIsLoading = (state: StateSchema) => state?.profile?.isLoading;
