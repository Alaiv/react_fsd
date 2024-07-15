import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/storeProvider';
import { LOCAL_STORAGE_USER_KEY } from '@/shared/const/localStorageConst';
import { IProfile } from '@/entities/Profile';
import { ProfileError } from '../../const/constants';
import { validateProfileData } from '../../../model/validate/validateProfileData';
import { getFormData } from '../../selectors/getFormData/getFormData';

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
            const response = await extra.api.put<IProfile>(`/profile/${formData?.id}`, formData, {
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
            return rejectWithValue([ProfileError.SERVER_ERROR]);
        }
    },
);
