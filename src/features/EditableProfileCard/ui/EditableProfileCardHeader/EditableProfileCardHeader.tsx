import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Text, TextSize } from '@/shared/ui/text/Text';
import { Button, ButtonType } from '@/shared/ui/button/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { ProfileSliceActions } from '../../model/slice/ProfileSlice';
import { getReadonly } from '../../model/selectors/getReadonly/getReadonly';
import { saveProfileInfoData } from '../../model/services/saveProfileInfoData/SaveProfileInfoData';

export interface ProfileHeaderProps {
    extraClassName?: string;
    profileId?: string;
}

export const EditableProfileCardHeader = ({ extraClassName, profileId }: ProfileHeaderProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const readonly = useSelector(getReadonly);
    const currentUser = useSelector(getUserAuthData);
    const canEditProfile = Number(profileId) === Number(currentUser?.id);

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
                                data-testid="EditableProfileCardHeader.EditBtn"
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
                                data-testid="EditableProfileCardHeader.SaveBtn"
                            >
                                {t('Сохранить')}
                            </Button>
                            <Button
                                btnType={ButtonType.OUTLINE_RED}
                                onClick={cancelChanges}
                                data-testid="EditableProfileCardHeader.CancelBtn"
                            >
                                {t('Отменить')}
                            </Button>
                        </HStack>
                    )
            }
        </HStack>
    );
};
