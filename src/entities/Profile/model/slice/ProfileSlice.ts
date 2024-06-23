import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/ProfileSchema';

const initialState: ProfileSchema = {
    isLoading: false,
    profileInfo: undefined,
    readonly: false,
};

const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
});

export const { actions: ProfileSliceActions } = ProfileSlice;
export const { reducer: ProfileSliceReducer } = ProfileSlice;
