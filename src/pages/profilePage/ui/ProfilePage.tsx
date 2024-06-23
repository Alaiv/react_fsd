import React from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicReducersHandler, ReducersList } from 'shared/lib/components/DynamicReducersHandler';
import { ProfileSliceReducer } from 'entities/Profile';

const baseReducers: ReducersList = {
    profile: ProfileSliceReducer,
};

const ProfilePage = () => {
    const { t } = useTranslation();

    return (
        <DynamicReducersHandler reducers={baseReducers} isRemove>
            <div>
                {t('Страница профиля')}
            </div>
        </DynamicReducersHandler>
    );
};

export default ProfilePage;
