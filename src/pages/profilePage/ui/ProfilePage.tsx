import React, { useCallback } from 'react';
import { DynamicReducersHandler, ReducersList } from 'shared/lib/components/DynamicReducersHandler';
import {
    fetchProfileInfoData,
    getError,
    getIsLoading,
    getProfileValidationErrors,
    getReadonly,
    Profile,
    ProfileError,
    ProfileSliceActions,
    ProfileSliceReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getFormData } from 'entities/Profile/model/selectors/getFormData/getFormData';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextColor } from 'shared/ui/text/Text';
import { useConditionalEffect } from 'shared/lib/hooks/useConditionalEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/ui/Page';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { ProfileHeader } from './ProfileHeader/ProfileHeader';

const baseReducers: ReducersList = {
    profile: ProfileSliceReducer,
};

const ProfilePage = () => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();

    const formData = useSelector(getFormData);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
    const readonly = useSelector(getReadonly);
    const validationErrors = useSelector(getProfileValidationErrors);

    const validationErrorTranslations = {
        [ProfileError.WRONG_CITY]: t('Некорректный город'),
        [ProfileError.WRONG_AGE]: t('Некорректный возраст'),
        [ProfileError.WRONG_USER_DATA]: t('Некорректные данные пользователя'),
        [ProfileError.SERVER_ERROR]: t('Ошибка сервера'),
        [ProfileError.EMPTY_DATA]: t('Не указаны данные'),
    };

    useConditionalEffect(() => {
        dispatch(fetchProfileInfoData(id));
    });

    const onFirstNameChange = useCallback((value: string) => {
        dispatch(ProfileSliceActions.editProfileData({ first: value || '' }));
    }, [dispatch]);

    const onLastNameChange = useCallback((value: string) => {
        dispatch(ProfileSliceActions.editProfileData({ lastname: value || '' }));
    }, [dispatch]);

    const onAgeChange = useCallback((value: string) => {
        const valueIsNumber = /^\d+$/.test(value);

        if (valueIsNumber || !value.length) {
            dispatch(ProfileSliceActions.editProfileData({ age: Number(value) || 0 }));
        }
    }, [dispatch]);

    const onCityChange = useCallback((value: string) => {
        dispatch(ProfileSliceActions.editProfileData({ city: value || '' }));
    }, [dispatch]);

    const onUsernameChange = useCallback((value: string) => {
        dispatch(ProfileSliceActions.editProfileData({ username: value || '' }));
    }, [dispatch]);

    const onAvatarChange = useCallback((value: string) => {
        dispatch(ProfileSliceActions.editProfileData({ avatar: value || '' }));
    }, [dispatch]);

    const onCurrencyChange = useCallback((cur: Currency) => {
        dispatch(ProfileSliceActions.editProfileData({ currency: cur }));
    }, [dispatch]);

    const onCountryChange = useCallback((countryValue: Country) => {
        dispatch(ProfileSliceActions.editProfileData({ country: countryValue }));
    }, [dispatch]);

    const errors = validationErrors?.map((err) => (
        <Text textColor={TextColor.ERROR} key={err} text={validationErrorTranslations[err]} />));

    return (
        <DynamicReducersHandler reducers={baseReducers} isRemove>
            <Page>
                <VStack max gap={16}>
                    <ProfileHeader profileId={id} />
                    {validationErrors && errors}
                    <Profile
                        formData={formData}
                        isLoading={isLoading}
                        isReadonly={readonly}
                        error={error}
                        onFirstNameChange={onFirstNameChange}
                        onLastNameChange={onLastNameChange}
                        onAgeChange={onAgeChange}
                        onCityChange={onCityChange}
                        onUsernameChange={onUsernameChange}
                        onAvatarChange={onAvatarChange}
                        onCurrencyChange={onCurrencyChange}
                        onCountryChange={onCountryChange}
                    />
                </VStack>
            </Page>
        </DynamicReducersHandler>
    );
};

export default ProfilePage;
