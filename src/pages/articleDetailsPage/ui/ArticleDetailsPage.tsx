import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cl from './ArticleDetailsPage.module.scss';

export interface ArticleDetailsPageProps {
    extraClassName?: string;
}

const ArticleDetailsPage = ({ extraClassName }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cl.ArticleDetailsPage, {}, [extraClassName])}>
            {t('Информация о статье')}
        </div>
    );
};

export default memo(ArticleDetailsPage);
