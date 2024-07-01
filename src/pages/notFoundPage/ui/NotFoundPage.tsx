import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/ui/Page';
import cl from './NotFoundPage.module.scss';

export interface NotFoundPageProps {
    extraClassName?: string;
}

export const NotFoundPage = ({ extraClassName }: NotFoundPageProps) => {
    const { t } = useTranslation();

    return (
        <Page extraClassName={classNames(cl.NotFoundPage, {}, [extraClassName])}>
            {t('Страница не найдена')}
        </Page>
    );
};
