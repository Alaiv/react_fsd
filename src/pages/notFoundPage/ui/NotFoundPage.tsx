import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import cl from './NotFoundPage.module.scss';

export interface NotFoundPageProps {
    extraClassName?: string;
}

export const NotFoundPage = ({ extraClassName }: NotFoundPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cl.NotFoundPage, {}, [extraClassName])}>
            {t('Страница не найдена')}
        </div>
    );
};
