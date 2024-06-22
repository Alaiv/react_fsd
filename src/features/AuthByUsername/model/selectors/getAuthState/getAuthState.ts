import { StateSchema } from 'app/providers/storeProvider';

export const getAuthState = (state: StateSchema) => state?.auth;
