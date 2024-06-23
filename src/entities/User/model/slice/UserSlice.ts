import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, UserSchema } from 'entities/User/model/types/UserSchema';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localStorageConst';

const initialState: UserSchema = {
    authData: undefined,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<IUser>) => {
            state.authData = action.payload;
        },
        removeAuthData: (state) => {
            localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
            state.authData = undefined;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
    },
});

export const { actions: UserAction } = userSlice;
export const { reducer: UserReducer } = userSlice;
