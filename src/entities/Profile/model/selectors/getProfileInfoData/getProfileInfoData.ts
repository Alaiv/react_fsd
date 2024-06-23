import { StateSchema } from 'app/providers/storeProvider';

export const getProfileInfoData = (state: StateSchema) => state?.profile?.profileInfo;
