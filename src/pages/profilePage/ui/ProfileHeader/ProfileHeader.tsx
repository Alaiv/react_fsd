import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/text/Text';
import { Button, ButtonType } from 'shared/ui/button/Button';
import { useSelector } from 'react-redux';
import { getReadonly, ProfileSliceActions, saveProfileInfoData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useCallback } from 'react';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack/HStack/HStack';

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
        <HStack max extraClassName={classNames('', {}, [extraClassName])} justify="between">
            <Text title={t('Профиль')} size={TextSize.L} />
            {
                readonly
                    ? (
                        canEditProfile && (
                            <Button
                                btnType={ButtonType.OUTLINE}
                                onClick={setEditMode}
                            >
                                {t('Редактировать')}
                            </Button>
                        )
                    )
                    : (
                        <HStack gap={8}>
                            <Button
                                btnType={ButtonType.OUTLINE}
                                onClick={saveChanges}
                            >
                                {t('Сохранить')}
                            </Button>
                            <Button
                                btnType={ButtonType.OUTLINE_RED}
                                onClick={cancelChanges}
                            >
                                {t('Отменить')}
                            </Button>
                        </HStack>
                    )
            }
        </HStack>
    );
};
