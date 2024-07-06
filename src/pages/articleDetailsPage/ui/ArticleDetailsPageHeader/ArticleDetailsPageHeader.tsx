import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { RoutePaths } from 'shared/config/routeConfig/RouteConfig';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonType } from 'shared/ui/button/Button';
import { useSelector } from 'react-redux';
import { HStack } from 'shared/ui/Stack/HStack/HStack';
import { getCanEditaArticle } from '../../model/selectors/articleSelectors';

export interface ArticleDetailsPageHeaderProps {
    extraClassName?: string,
    id?: string
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation();
    const { extraClassName, id } = props;
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditaArticle);

    const returnToArticlesHandler = useCallback(() => {
        navigate(RoutePaths.article);
    }, [navigate]);

    const openEditArticlePage = useCallback(() => {
        navigate(`${RoutePaths.article}/${id}/edit`);
    }, [id, navigate]);

    return (
        <HStack gap={8} max justify="between" extraClassName={classNames('', {}, [extraClassName])}>
            <Button btnType={ButtonType.OUTLINE} onClick={returnToArticlesHandler}>
                {t('Вернутся к списку постов')}
            </Button>
            {canEdit && (
                <Button
                    btnType={ButtonType.OUTLINE}
                    onClick={openEditArticlePage}
                >
                    {t('Редактировать')}
                </Button>
            )}
        </HStack>
    );
});
