import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { ConsoleInput } from '@/shared/ui/input/ConsoleInput/ConsoleInput';
import { Loader } from '@/shared/ui/loader/Loader';
import { Text, TextAlignment, TextColor } from '@/shared/ui/text/Text';
import { Avatar } from '@/shared/ui/avatar/Avatar';
import { Currency, CurrencySelector } from '@/entities/Currency';
import { Country, CountrySelector } from '@/entities/Country';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { IProfile } from '../model/types/ProfileSchema';
import cl from './Profile.module.scss';

export interface ProfileProps {
    extraClassName?: string;
    isLoading?: boolean;
    formData?: IProfile;
    isReadonly?: boolean;
    error?: string;
    onFirstNameChange?: (value: string) => void;
    onLastNameChange?: (value: string) => void;
    onAgeChange?: (value: string) => void;
    onCityChange?: (value: string) => void;
    onUsernameChange?: (value: string) => void;
    onAvatarChange?: (value: string) => void;
    onCurrencyChange?: (value: Currency) => void;
    onCountryChange?: (value: Country) => void;
}

export const Profile = memo((props: ProfileProps) => {
    const { t } = useTranslation('profile');

    const {
        extraClassName,
        isLoading,
        formData,
        isReadonly = false,
        error,
        onFirstNameChange,
        onLastNameChange,
        onAgeChange,
        onCityChange,
        onUsernameChange,
        onAvatarChange,
        onCurrencyChange,
        onCountryChange,
    } = props;

    if (error) {
        return (
            <Text
                title={t('Что-то пошло не так при загрузке профиля.')}
                text={t('Попробуйте обновить страницу.')}
                textColor={TextColor.ERROR}
                align={TextAlignment.CENTER}
            />
        );
    }

    if (isLoading) {
        return (
            <HStack max justify="center" align="center">
                <Loader />
            </HStack>
        );
    }

    return (
        <VStack max gap={16} extraClassName={classNames(cl.Profile, { [cl.editing]: !isReadonly }, [extraClassName])}>
            {formData?.avatar && (
                <HStack align="center" justify="center" max>
                    <Avatar src={formData?.avatar} size={200} alt="avatar" />
                </HStack>
            )}
            <ConsoleInput
                placeholder={t('Введите имя')}
                value={formData?.first}
                extraClassName={cl.profileInput}
                readonly={isReadonly}
                onChange={onFirstNameChange}
                data-testid="Profile.Name"
            />
            <ConsoleInput
                placeholder={t('Введите фамилию')}
                value={formData?.lastname}
                extraClassName={cl.profileInput}
                readonly={isReadonly}
                onChange={onLastNameChange}
                data-testid="Profile.Lastname"
            />
            <ConsoleInput
                placeholder={t('Введите возраст')}
                value={formData?.age}
                extraClassName={cl.profileInput}
                readonly={isReadonly}
                onChange={onAgeChange}
            />
            <ConsoleInput
                placeholder={t('Введите город')}
                value={formData?.city}
                extraClassName={cl.profileInput}
                readonly={isReadonly}
                onChange={onCityChange}
            />
            <ConsoleInput
                placeholder={t('Введите имя пользователя')}
                value={formData?.username}
                extraClassName={cl.profileInput}
                readonly={isReadonly}
                onChange={onUsernameChange}
            />
            <ConsoleInput
                placeholder={t('Введите ссылку для аватара')}
                value={formData?.avatar}
                extraClassName={cl.profileInput}
                readonly={isReadonly}
                onChange={onAvatarChange}
            />
            <CurrencySelector
                extraClassName={cl.profileInput}
                onChange={onCurrencyChange}
                value={formData?.currency}
                readonly={isReadonly}
            />
            <CountrySelector
                extraClassName={cl.profileInput}
                onChange={onCountryChange}
                value={formData?.country}
                readonly={isReadonly}
            />
        </VStack>
    );
});
