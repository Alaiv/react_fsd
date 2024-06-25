import { StateSchema } from 'app/providers/storeProvider';

export const getProfileValidationErrors = (state: StateSchema) => state?.profile?.validationErrors;
