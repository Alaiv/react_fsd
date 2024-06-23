import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { ConsoleInput } from 'shared/ui/input/ConsoleInput/ConsoleInput';
import { Loader } from 'shared/ui/loader/Loader';
import { IProfile } from 'entities/Profile';
import { Text, TextAlignment, TextColor } from 'shared/ui/text/Text';
import cl from './Profile.module.scss';

export interface ProfileProps {
    extraClassName?: string;
    isLoading?: boolean;
    profileData?: IProfile;
    isReadonly?: boolean;
    error?: string
}

export const Profile = memo((props: ProfileProps) => {
    const { t } = useTranslation('profile');
    const {
        extraClassName,
        isLoading,
        profileData,
        isReadonly = false,
        error,
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
                                value={profileData?.first}
                                extraClassName={cl.profileInput}
                                readonly={isReadonly}
                            />
                            <ConsoleInput
                                placeholder={t('Введите фамилию')}
                                value={profileData?.lastname}
                                extraClassName={cl.profileInput}
                                readonly={isReadonly}
                            />
                        </div>
                    )
            }
        </div>
    );
});
