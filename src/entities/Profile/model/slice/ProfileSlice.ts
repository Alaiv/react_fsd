import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileInfoData } from 'entities/Profile';
import { IProfile, ProfileSchema } from '../types/ProfileSchema';

const initialState: ProfileSchema = {
    isLoading: false,
    profileInfo: undefined,
    readonly: false,
};

const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileInfoData.pending, (state, action) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchProfileInfoData.fulfilled, (state, action: PayloadAction<IProfile>) => {
                state.error = '';
                state.isLoading = false;

                state.profileInfo = action.payload;
            })
            .addCase(fetchProfileInfoData.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: ProfileSliceActions } = ProfileSlice;
export const { reducer: ProfileSliceReducer } = ProfileSlice;
