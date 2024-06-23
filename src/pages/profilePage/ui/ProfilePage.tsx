import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicReducersHandler, ReducersList } from 'shared/lib/components/DynamicReducersHandler';
import { fetchProfileInfoData, Profile, ProfileSliceReducer } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

const baseReducers: ReducersList = {
    profile: ProfileSliceReducer,
};

const ProfilePage = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileInfoData());
    }, [dispatch]);

    return (
        <DynamicReducersHandler reducers={baseReducers} isRemove>
            <Profile />
        </DynamicReducersHandler>
    );
};

export default ProfilePage;
