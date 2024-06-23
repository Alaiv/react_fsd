import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { ConsoleInput } from 'shared/ui/input/ConsoleInput/ConsoleInput';
import { Loader } from 'shared/ui/loader/Loader';
import { IProfile, ProfileSliceActions } from 'entities/Profile';
import { Text, TextAlignment, TextColor } from 'shared/ui/text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import cl from './Profile.module.scss';

export interface ProfileProps {
    extraClassName?: string;
    isLoading?: boolean;
    formData?: IProfile;
    isReadonly?: boolean;
    error?: string;
    onFirstNameChange?: (value: string) => void;
    onLastNameChange?: (value: string) => void;
}

export const Profile = memo((props: ProfileProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    const {
        extraClassName,
        isLoading,
        formData,
        isReadonly = false,
        error,
        onFirstNameChange,
        onLastNameChange,
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

    return (
        <div className={classNames(cl.Profile, {}, [extraClassName])}>
            {
                isLoading
                    ? <Loader />
                    : (
                        <div className={cl.profileInfo}>
                            <ConsoleInput
                                placeholder={t('Введите имя')}
                                value={formData?.first}
                                extraClassName={cl.profileInput}
                                readonly={isReadonly}
                                onChange={onFirstNameChange}
                            />
                            <ConsoleInput
                                placeholder={t('Введите фамилию')}
                                value={formData?.lastname}
                                extraClassName={cl.profileInput}
                                readonly={isReadonly}
                                onChange={onLastNameChange}
                            />
                        </div>
                    )
            }
        </div>
    );
});
