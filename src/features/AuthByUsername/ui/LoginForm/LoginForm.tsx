import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonType } from 'shared/ui/button/Button';
import { ConsoleInput } from 'shared/ui/input/ConsoleInput/ConsoleInput';
import cl from './LoginForm.module.scss';

export interface LoginFormProps {
    extraClassName?: string;
}

export const LoginForm = ({ extraClassName }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cl.LoginForm, {}, [extraClassName])}>
            <ConsoleInput placeholder={t('Введите имя')} extraClassName={cl.input} autoFocus />
            <ConsoleInput placeholder={t('Введите пароль')} extraClassName={cl.input} />
            <Button btnType={ButtonType.OUTLINE} extraClassName={cl.btn}>{t('Логин')}</Button>
        </div>
    );
};
