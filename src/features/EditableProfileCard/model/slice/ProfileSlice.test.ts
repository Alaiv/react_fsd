import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { IProfile } from 'entities/Profile';
import { saveProfileInfoData } from '../services/saveProfileInfoData/SaveProfileInfoData';
import { ProfileError, ProfileSchema } from '../types/ProfileSchema';
import { ProfileSliceActions, ProfileSliceReducer } from './ProfileSlice';

const data: IProfile = {
    username: 'user123',
    age: 12,
    city: 'asda',
    first: 'asdasd',
    lastname: 'asdasd',
    country: Country.England,
    currency: Currency.RUB,
    avatar: 'asdasdas',
};

describe('ProfileSlice.test', () => {
    test('test set readonly', () => {
        const state: ProfileSchema = {
            isLoading: false,
            profileInfo: undefined,
            readonly: false,
        };

        const expectedState: ProfileSchema = {
            isLoading: false,
            profileInfo: undefined,
            readonly: true,
        };

        expect(ProfileSliceReducer(state, ProfileSliceActions.setReadonly(true))).toEqual(expectedState);
    });

    test('test cancel editing', () => {
        const state: ProfileSchema = {
            isLoading: false,
            profileInfo: data,
            formData: { ...data, first: 'changed' },
            readonly: false,
            validationErrors: [],
        };

        const expectedState: ProfileSchema = {
            isLoading: false,
            profileInfo: data,
            formData: data,
            readonly: true,
            validationErrors: undefined,
        };

        expect(ProfileSliceReducer(state, ProfileSliceActions.cancelEditing())).toEqual(expectedState);
    });

    test('test edit profile data', () => {
        const state: ProfileSchema = {
            profileInfo: undefined,
            isLoading: false,
            formData: data,
            readonly: false,
        };

        const newData = { ...data, username: 'user123', age: 25 };

        const expectedState: ProfileSchema = {
            profileInfo: undefined,
            isLoading: false,
            formData: newData,
            readonly: false,
        };

        expect(ProfileSliceReducer(state, ProfileSliceActions.editProfileData(newData))).toEqual(expectedState);
    });

    test('test undefined state', () => {
        const state: ProfileSchema = {
            profileInfo: undefined,
            isLoading: false,
            readonly: true,
        };

        expect(ProfileSliceReducer(undefined, ProfileSliceActions.setReadonly(false)))
            .toEqual({ ...state, readonly: false });
    });

    test('test save profile pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validationErrors: [],
        };

        expect(
            ProfileSliceReducer(
                state as ProfileSchema,
                saveProfileInfoData.pending,
            ),
        ).toEqual({ isLoading: true, validationErrors: undefined });
    });

    test('test save profile fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            formData: undefined,
            validationErrors: [ProfileError.EMPTY_DATA],
            profileInfo: undefined,
            isLoading: true,
            readonly: false,
        };

        expect(
            ProfileSliceReducer(
                state as ProfileSchema,
                saveProfileInfoData.fulfilled(data, ''),
            ),
        ).toEqual({
            formData: data,
            profileInfo: data,
            validationErrors: undefined,
            isLoading: false,
            readonly: true,
        });
    });
});
