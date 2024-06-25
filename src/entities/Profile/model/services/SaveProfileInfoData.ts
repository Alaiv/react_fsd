import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localStorageConst';
import { getFormData } from 'entities/Profile';
import { validateProfileData } from 'entities/Profile/model/validate/validateProfileData';
import { IProfile, ProfileError } from '../types/ProfileSchema';

export const saveProfileInfoData = createAsyncThunk<IProfile, void, ThunkConfig<ProfileError[]>>(
    'profile/savePorfileInfoData',
    async (props, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;
        const formData = getFormData(getState());

        const errors = validateProfileData(formData);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.post<IProfile>('/profile', formData, {
                headers: {
                    authorization: localStorage.getItem(LOCAL_STORAGE_USER_KEY) || '',
                },
            });

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue([ProfileError.SERVER_ERROR]);
        }
    },
);
