import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/text/Text';
import { Button, ButtonType } from 'shared/ui/button/Button';
import { useSelector } from 'react-redux';
import { getReadonly, ProfileSliceActions } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useCallback } from 'react';
import cl from './ProfileHeader.module.scss';

export interface ProfileHeaderProps {
    extraClassName?: string;
}

export const ProfileHeader = ({ extraClassName }: ProfileHeaderProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const readonly = useSelector(getReadonly);

    const setEditMode = useCallback(() => {
        dispatch(ProfileSliceActions.setReadonly(false));
    }, [dispatch]);

    const cancelEditMode = useCallback(() => {
        dispatch(ProfileSliceActions.setReadonly(true));
    }, [dispatch]);

    return (
        <div className={classNames(cl.ProfileHeader, {}, [extraClassName])}>
            <Text title={t('Профиль')} />
            {
                readonly
                    ? (
                        <Button
                            btnType={ButtonType.OUTLINE}
                            extraClassName={cl.editBtn}
                            onClick={setEditMode}
                        >
                            {t('Редактировать')}
                        </Button>
                    )
                    : (
                        <Button
                            btnType={ButtonType.OUTLINE}
                            extraClassName={cl.editBtn}
                            onClick={cancelEditMode}
                        >
                            {t('Отменить')}
                        </Button>
                    )
            }
        </div>
    );
};
