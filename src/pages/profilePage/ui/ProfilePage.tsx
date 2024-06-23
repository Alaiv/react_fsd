import React, { useCallback, useEffect } from 'react';
import { DynamicReducersHandler, ReducersList } from 'shared/lib/components/DynamicReducersHandler';
import {
    fetchProfileInfoData,
    getError,
    getIsLoading,
    getProfileInfoData,
    getReadonly,
    Profile, ProfileSliceActions,
    ProfileSliceReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getFormData } from 'entities/Profile/model/selectors/getFormData/getFormData';
import { ProfileHeader } from './ProfileHeader/ProfileHeader';

const baseReducers: ReducersList = {
    profile: ProfileSliceReducer,
};

const ProfilePage = () => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    const formData = useSelector(getFormData);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
    const readonly = useSelector(getReadonly);

    useEffect(() => {
        dispatch(fetchProfileInfoData());
    }, [dispatch]);

    const onFirstNameChange = useCallback((value: string) => {
        dispatch(ProfileSliceActions.editProfileData({ first: value }));
    }, [dispatch]);

    const onLastNameChange = useCallback((value: string) => {
        dispatch(ProfileSliceActions.editProfileData({ lastname: value }));
    }, [dispatch]);

    return (
        <DynamicReducersHandler reducers={baseReducers} isRemove>
            <ProfileHeader />
            <Profile
                formData={formData}
                isLoading={isLoading}
                isReadonly={readonly}
                error={error}
                onFirstNameChange={onFirstNameChange}
                onLastNameChange={onLastNameChange}
            />
        </DynamicReducersHandler>
    );
};

export default ProfilePage;
