import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from 'entities/User/model/types/UserSchema';

const initialState: UserSchema = {};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export const { actions: UserAction } = userSlice;
export const { reducer: UserReducer } = userSlice;
