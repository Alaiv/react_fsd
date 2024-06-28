import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import {
    ArticleDetails, getArticle, getError, getIsLoading,
} from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Text, TextColor } from 'shared/ui/text/Text';
import cl from './ArticleDetailsPage.module.scss';

export interface ArticleDetailsPageProps {
    extraClassName?: string;
}

const ArticleDetailsPage = ({ extraClassName }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();

    if (!id && __PROJECT__ !== 'storybook') {
        return (
            <div className={classNames(cl.ArticleDetailsPage, {}, [extraClassName])}>
                <Text textColor={TextColor.ERROR} text={t('Статья не найдена')} />
            </div>
        );
    }

    return (
        <div className={classNames(cl.ArticleDetailsPage, {}, [extraClassName])}>
            <ArticleDetails id={id || '1'} />
        </div>
    );
};

export default memo(ArticleDetailsPage);
