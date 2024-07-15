import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames';
import { Profile } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { Text, TextColor } from '@/shared/ui/text/Text';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useConditionalEffect } from '@/shared/lib/hooks/useConditionalEffect';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { DynamicReducersHandler, ReducersList } from '@/shared/lib/components/DynamicReducersHandler';
import { ProfileError } from '../../model/const/constants';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { getFormData } from '../../model/selectors/getFormData/getFormData';
import { getIsLoading } from '../../model/selectors/getIsLoading/getIsLoading';
import { getError } from '../../model/selectors/getError/getError';
import { getReadonly } from '../../model/selectors/getReadonly/getReadonly';
import { getProfileValidationErrors } from '../../model/selectors/getProfileValidationErrors/getProfileValidationErrors';
import {
    fetchProfileInfoData,
} from '../../model/services/fetchProfileInfoData/FetchProfileInfoData';
import { ProfileSliceActions, ProfileSliceReducer } from '../../model/slice/ProfileSlice';

interface EditableProfileCardProps {
    extraClassName?: string;
    id?: string;
}

const baseReducers: ReducersList = {
    profile: ProfileSliceReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { extraClassName, id } = props;
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const formData = useSelector(getFormData);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
    const readonly = useSelector(getReadonly);
    const validationErrors = useSelector(getProfileValidationErrors);

    useConditionalEffect(() => {
        dispatch(fetchProfileInfoData(id));
    });

    const validationErrorTranslations = {
        [ProfileError.WRONG_CITY]: t('Некорректный город'),
        [ProfileError.WRONG_AGE]: t('Некорректный возраст'),
        [ProfileError.WRONG_USER_DATA]: t('Некорректные данные пользователя'),
        [ProfileError.SERVER_ERROR]: t('Ошибка сервера'),
        [ProfileError.EMPTY_DATA]: t('Не указаны данные'),
    };

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
        <Text
            textColor={TextColor.ERROR}
            key={err}
            text={validationErrorTranslations[err]}
            data-testid="EditableProfileCard.Error"
        />
    ));

    return (
        <DynamicReducersHandler reducers={baseReducers}>
            <VStack max gap={8} className={classNames('', {}, [extraClassName])}>
                <EditableProfileCardHeader profileId={id} />
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
        </DynamicReducersHandler>
    );
});
