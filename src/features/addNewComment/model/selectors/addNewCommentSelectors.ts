import { StateSchema } from '@/app/providers/storeProvider';

export const getError = (state: StateSchema) => state?.addNewComment?.error;
export const getText = (state: StateSchema) => state?.addNewComment?.text;
