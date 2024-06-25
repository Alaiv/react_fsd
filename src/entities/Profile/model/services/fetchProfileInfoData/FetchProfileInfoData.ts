import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { ThunkConfig } from 'app/providers/storeProvider';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localStorageConst';
import { IProfile } from '../../types/ProfileSchema';

export const fetchProfileInfoData = createAsyncThunk<IProfile, void, ThunkConfig<string>>(
    'profile/fetchProfileInfoData',
    async (props, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<IProfile>('/profile', {
                headers: {
                    authorization: localStorage.getItem(LOCAL_STORAGE_USER_KEY) || '',
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(i18n.t('error fetching profile data'));
        }
    },
);
