import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames';
import { Page } from '@/widgets/Page';
import cl from './ArticleEditPage.module.scss';

export interface ArticleEditPageProps {
    extraClassName?: string,
}
// TODO add edit and create article login (features for block types, and aggregating widget for example)
const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { t } = useTranslation();
    const { extraClassName } = props;
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);

    return (
        <Page extraClassName={classNames(cl.ArticleEditPage, {}, [extraClassName])}>
            {
                isEdit
                    ? t('Редактирование статьи - ') + id
                    : t('Создание статьи')
            }
        </Page>
    );
});

export default ArticleEditPage;
