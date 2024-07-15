import { StateSchema } from '@/app/providers/storeProvider';

export const getInited = (state: StateSchema) => state.user._inited;
