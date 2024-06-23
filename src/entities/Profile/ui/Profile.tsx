import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/text/Text';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Button, ButtonType } from 'shared/ui/button/Button';
import { ConsoleInput } from 'shared/ui/input/ConsoleInput/ConsoleInput';
import { Loader } from 'shared/ui/loader/Loader';
import { getProfileInfoData } from '../model/selectors/getAuthInfoData/getProfileInfoData';
import cl from './Profile.module.scss';
import { getIsLoading } from '../model/selectors/getIsLoading/getIsLoading';
import { getError } from '../model/selectors/getError/getError';

export interface ProfileProps {
    extraClassName?: string;
}

export const Profile = memo(({ extraClassName }: ProfileProps) => {
    const { t } = useTranslation('profile');
    const profileData = useSelector(getProfileInfoData);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    return (
        <div className={classNames(cl.Profile, {}, [extraClassName])}>
            <div className={cl.profileHeader}>
                <Text title={t('Профиль')} />
                <Button btnType={ButtonType.OUTLINE} extraClassName={cl.editBtn}>
                    {t('Редактировать')}
                </Button>
            </div>
            {
                isLoading
                    ? <Loader />
                    : (
                        <div className={cl.profileInfo}>
                            <ConsoleInput
                                placeholder={t('Введите имя')}
                                value={profileData?.first}
                                extraClassName={cl.profileInput}
                            />
                            <ConsoleInput
                                placeholder={t('Введите фамилию')}
                                value={profileData?.lastname}
                                extraClassName={cl.profileInput}
                            />
                            <ConsoleInput
                                placeholder={t('Введите город')}
                                value={profileData?.city}
                                extraClassName={cl.profileInput}
                            />
                        </div>
                    )
            }
        </div>
    );
});
