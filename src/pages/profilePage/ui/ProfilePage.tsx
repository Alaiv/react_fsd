import React, { useEffect } from 'react';
import { DynamicReducersHandler, ReducersList } from 'shared/lib/components/DynamicReducersHandler';
import {
    fetchProfileInfoData,
    getError,
    getIsLoading,
    getProfileInfoData,
    getReadonly,
    Profile,
    ProfileSliceReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ProfileHeader } from './ProfileHeader/ProfileHeader';

const baseReducers: ReducersList = {
    profile: ProfileSliceReducer,
};

const ProfilePage = () => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    const profileData = useSelector(getProfileInfoData);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
    const readonly = useSelector(getReadonly);

    useEffect(() => {
        dispatch(fetchProfileInfoData());
    }, [dispatch]);

    return (
        <DynamicReducersHandler reducers={baseReducers} isRemove>
            <ProfileHeader />
            <Profile
                profileData={profileData}
                isLoading={isLoading}
                isReadonly={readonly}
                error={error}
            />
        </DynamicReducersHandler>
    );
};

export default ProfilePage;
