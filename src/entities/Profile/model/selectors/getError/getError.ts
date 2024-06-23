import { StateSchema } from 'app/providers/storeProvider';

export const getError = (state: StateSchema) => state?.profile?.error;
