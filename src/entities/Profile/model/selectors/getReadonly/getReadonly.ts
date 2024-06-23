import { StateSchema } from 'app/providers/storeProvider';

export const getReadonly = (state: StateSchema) => state?.profile?.readonly;
