import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { ThunkConfig } from 'app/providers/storeProvider';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localStorageConst';
import { getFormData } from 'entities/Profile';
import { IProfile } from '../types/ProfileSchema';

export const saveProfileInfoData = createAsyncThunk<IProfile, void, ThunkConfig<string>>(
    'profile/savePorfileInfoData',
    async (props, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;
        const formData = getFormData(getState());

        try {
            const response = await extra.api.post<IProfile>('/profile', formData, {
                headers: {
                    authorization: localStorage.getItem(LOCAL_STORAGE_USER_KEY) || '',
                },
            });

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(i18n.t('error saving profile data'));
        }
    },
);
