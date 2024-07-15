import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser, UserAction } from '@/entities/User';
import { LOCAL_STORAGE_USER_KEY } from '@/shared/const/localStorageConst';
import { ThunkConfig } from '@/app/providers/storeProvider';

export interface LoginByUsernameProps {
    username?: string;
    password?: string;
}

export const loginByUsername = createAsyncThunk<IUser, LoginByUsernameProps, ThunkConfig<string>>(
    'loginByUsername',
    async (props, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.post<IUser>('/login', props);
            const userData = response.data;

            if (!userData) {
                throw new Error();
            }

            localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(userData));
            dispatch(UserAction.setAuthData(userData));

            return userData;
        } catch (error) {
            console.log(error);
            return rejectWithValue('error');
        }
    },
);
