import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonType } from 'shared/ui/button/Button';
import { ConsoleInput } from 'shared/ui/input/ConsoleInput/ConsoleInput';
import { useDispatch, useSelector } from 'react-redux';
import { AuthActions } from 'features/AuthByUsername';
import { useCallback } from 'react';
import { Text, TextColor } from 'shared/ui/text/Text';
import { loginByUsername } from '../../model/services/LoginByUsername';
import { getAuthState } from '../../model/selectors/getAuthState/getAuthState';
import cl from './LoginForm.module.scss';

export interface LoginFormProps {
    extraClassName?: string;
}

export const LoginForm = ({ extraClassName }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getAuthState);

    const setUsernameHandler = useCallback((username: string) => {
        dispatch(AuthActions.setUsername(username));
    }, [dispatch]);

    const setPasswordHandler = useCallback((password: string) => {
        dispatch(AuthActions.setPassword(password));
    }, [dispatch]);

    const loginClickHandler = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cl.LoginForm, {}, [extraClassName])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={error} textColor={TextColor.ERROR} />}

            <ConsoleInput
                placeholder={t('Введите имя')}
                extraClassName={cl.input}
                autoFocus
                value={username}
                onChange={setUsernameHandler}
            />
            <ConsoleInput
                placeholder={t('Введите пароль')}
                extraClassName={cl.input}
                value={password}
                onChange={setPasswordHandler}
            />
            <Button
                btnType={ButtonType.OUTLINE}
                extraClassName={cl.btn}
                onClick={loginClickHandler}
                disabled={isLoading}
            >
                {t('Логин')}
            </Button>
        </div>
    );
};
