import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from 'features/AuthByUsername/model/services/LoginByUsername';
import { AuthSchema } from '../type/authSchema';

const initialState: AuthSchema = {
    username: '',
    password: '',
    isLoading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state, _) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state, _) => {
                state.error = '';
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: AuthActions } = authSlice;
export const { reducer: AuthReducer } = authSlice;
