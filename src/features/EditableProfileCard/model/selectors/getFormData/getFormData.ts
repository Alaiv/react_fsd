import { StateSchema } from '@/app/providers/storeProvider';

export const getFormData = (state: StateSchema) => state?.profile?.formData;
