import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { ThunkConfig } from 'app/providers/storeProvider';
import { IProfile } from '../types/ProfileSchema';

export const fetchProfileInfoData = createAsyncThunk<IProfile, void, ThunkConfig<string>>(
    'profile/fetchProfileInfoData',
    async (props, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<IProfile>('/profile');
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(i18n.t('error fetching profile data'));
        }
    },
);
