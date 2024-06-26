import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/text/Text';
import { Button, ButtonType } from 'shared/ui/button/Button';
import { useSelector } from 'react-redux';
import { getReadonly, ProfileSliceActions, saveProfileInfoData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useCallback } from 'react';
import { getUserAuthData } from 'entities/User';
import cl from './ProfileHeader.module.scss';

export interface ProfileHeaderProps {
    extraClassName?: string;
    profileId?: string;
}

export const ProfileHeader = ({ extraClassName, profileId }: ProfileHeaderProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const readonly = useSelector(getReadonly);
    const currentUser = useSelector(getUserAuthData);
    const canEditProfile = profileId === currentUser?.id;

    const setEditMode = useCallback(() => {
        dispatch(ProfileSliceActions.setReadonly(false));
    }, [dispatch]);

    const cancelChanges = useCallback(() => {
        dispatch(ProfileSliceActions.cancelEditing());
    }, [dispatch]);

    const saveChanges = useCallback(() => {
        dispatch(saveProfileInfoData());
    }, [dispatch]);

    return (
        <div className={classNames(cl.ProfileHeader, {}, [extraClassName])}>
            <Text title={t('Профиль')} />
            {
                readonly
                    ? (
                        canEditProfile && (
                            <Button
                                btnType={ButtonType.OUTLINE}
                                extraClassName={cl.editBtn}
                                onClick={setEditMode}
                            >
                                {t('Редактировать')}
                            </Button>
                        )
                    )
                    : (
                        <div className={cl.profileBtns}>
                            <Button
                                btnType={ButtonType.OUTLINE}
                                extraClassName={cl.editBtn}
                                onClick={saveChanges}
                            >
                                {t('Сохранить')}
                            </Button>
                            <Button
                                btnType={ButtonType.OUTLINE_RED}
                                extraClassName={cl.editBtn}
                                onClick={cancelChanges}
                            >
                                {t('Отменить')}
                            </Button>
                        </div>
                    )
            }
        </div>
    );
};
