import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileInfoData } from 'entities/Profile';
import { saveProfileInfoData } from 'entities/Profile/model/services/saveProfileInfoData/SaveProfileInfoData';
import { IProfile, ProfileError, ProfileSchema } from '../types/ProfileSchema';

const initialState: ProfileSchema = {
    isLoading: false,
    profileInfo: undefined,
    readonly: true,
};

const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEditing: (state) => {
            state.formData = state.profileInfo;
            state.readonly = true;
            state.validationErrors = undefined;
        },
        editProfileData: (state, action: PayloadAction<IProfile>) => {
            state.formData = {
                ...state.formData,
                ...action.payload,
            };
        },
    },
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
                state.formData = action.payload;
            })
            .addCase(fetchProfileInfoData.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.isLoading = false;
                state.error = action.payload;
            });

        builder
            .addCase(saveProfileInfoData.pending, (state) => {
                state.validationErrors = undefined;
                state.isLoading = true;
            })
            .addCase(saveProfileInfoData.fulfilled, (state, action: PayloadAction<IProfile>) => {
                state.validationErrors = undefined;
                state.isLoading = false;
                state.readonly = true;

                state.profileInfo = action.payload;
                state.formData = action.payload;
            })
            .addCase(saveProfileInfoData.rejected, (state, action) => {
                state.isLoading = false;
                state.validationErrors = action.payload;
            });
    },
});

export const { actions: ProfileSliceActions } = ProfileSlice;
export const { reducer: ProfileSliceReducer } = ProfileSlice;
