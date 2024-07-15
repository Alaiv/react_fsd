import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/button/Button';

export interface PageErrorMessageProps {
    extraClassName?: string;
}

export const PageErrorMessage = ({ extraClassName }: PageErrorMessageProps) => {
    const { t } = useTranslation();
    const updatePage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames('', {}, [extraClassName])}>
            {t('Произошла ошибка. Обновите страницу')}
            <button type="button" onClick={updatePage}>{t('Обновить страницу')}</button>
        </div>
    );
};
