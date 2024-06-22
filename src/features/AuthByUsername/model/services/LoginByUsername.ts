import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser, UserAction } from 'entities/User';
import i18n from 'i18next';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localStorageConst';

export interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<IUser, LoginByUsernameProps, {rejectValue: string}>(
    'loginByUsername',
    async (props, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', props);
            const { password, ...userData } = response.data;

            localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(userData));
            thunkAPI.dispatch(UserAction.setAuthData(userData));

            return userData;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(i18n.t('Введен некорректный логин или пароль'));
        }
    },
);
