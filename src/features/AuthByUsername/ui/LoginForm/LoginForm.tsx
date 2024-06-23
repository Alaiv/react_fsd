import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonType } from 'shared/ui/button/Button';
import { ConsoleInput } from 'shared/ui/input/ConsoleInput/ConsoleInput';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextColor } from 'shared/ui/text/Text';
import { DynamicReducersHandler, ReducersList } from 'shared/lib/components/DynamicReducersHandler';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getUsername } from '../../model/selectors/getUsername/getUsername';
import { getPassword } from '../../model/selectors/getPassword/getPassword';
import { getIsLoading } from '../../model/selectors/getIsLoading/getIsLoading';
import { getError } from '../../model/selectors/getError/getError';
import { AuthActions, AuthReducer } from '../../../AuthByUsername/model/slice/authSlice';
import { loginByUsername } from '../../model/services/LoginByUsername';
import cl from './LoginForm.module.scss';

export interface LoginFormProps {
    extraClassName?: string;
    onSuccess?: () => void;
}

const baseReducers: ReducersList = {
    auth: AuthReducer,
};

const LoginForm = memo(({ extraClassName, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getUsername);
    const password = useSelector(getPassword);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    const setUsernameHandler = useCallback((username: string) => {
        dispatch(AuthActions.setUsername(username));
    }, [dispatch]);

    const setPasswordHandler = useCallback((password: string) => {
        dispatch(AuthActions.setPassword(password));
    }, [dispatch]);

    const loginClickHandler = useCallback(async () => {
        const dispatchResult = await dispatch(loginByUsername({ username, password }));
        if (dispatchResult.meta.requestStatus === 'fulfilled') {
            onSuccess?.();
            dispatch(AuthActions.setUsername(''));
            dispatch(AuthActions.setPassword(''));
        }
    }, [dispatch, onSuccess, password, username]);

    return (
        <DynamicReducersHandler reducers={baseReducers}>
            <div className={classNames(cl.LoginForm, {}, [extraClassName])}>
                <Text title={t('Форма авторизации')} />
                {error && <Text text={t(error)} textColor={TextColor.ERROR} />}

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
        </DynamicReducersHandler>
    );
});

export default LoginForm;
