import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cl from './ArticlePage.module.scss';

export interface ArticlePageProps {
    extraClassName?: string;
}

const ArticlePage = ({ extraClassName }: ArticlePageProps) => {
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cl.ArticlePage, {}, [extraClassName])}>
            {t('Статьи')}
        </div>
    );
};

export default memo(ArticlePage);
