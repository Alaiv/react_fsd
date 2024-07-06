import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localStorageConst';
import { IUser, UserSchema } from '../../model/types/UserSchema';

const initialState: UserSchema = {
    authData: undefined,
    _inited: false,
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
            state._inited = true;
        },
    },
});

export const { actions: UserAction } = userSlice;
export const { reducer: UserReducer } = userSlice;
