import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser, UserAction } from 'entities/User';
import i18n from 'i18next';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localStorageConst';
import { RouteName, RoutePaths } from 'shared/config/routeConfig/RouteConfig';
import { ThunkConfig, ThunkExtra } from 'app/providers/storeProvider';

export interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<IUser, LoginByUsernameProps, ThunkConfig<string>>(
    'loginByUsername',
    async (props, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.post<IUser>('/login', props);
            const userData = response.data;

            localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(userData));
            dispatch(UserAction.setAuthData(userData));
            extra.navigate(RoutePaths[RouteName.PROFILE]);
            return userData;
        } catch (error) {
            console.log(error);
            return rejectWithValue(i18n.t('Введен некорректный логин или пароль'));
        }
    },
);
