import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { RoutePaths } from 'shared/config/routeConfig/RouteConfig';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonType } from 'shared/ui/button/Button';
import { useSelector } from 'react-redux';
import { getCanEditaArticle } from 'pages/articleDetailsPage/model/selectors/articleSelectors';
import cl from './ArticleDetailsPageHeader.module.scss';

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
        <div className={classNames(cl.ArticleDetailsPageHeader, {}, [extraClassName])}>
            <Button btnType={ButtonType.OUTLINE} onClick={returnToArticlesHandler}>
                {t('Вернутся к списку постов')}
            </Button>
            {canEdit && (
                <Button
                    extraClassName={cl.editBtn}
                    btnType={ButtonType.OUTLINE}
                    onClick={openEditArticlePage}
                >
                    {t('Редактировать')}
                </Button>
            )}
        </div>
    );
});
