import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList } from 'entities/Article';
import { DynamicReducersHandler } from 'shared/lib/components/DynamicReducersHandler';
import { useConditionalEffect } from 'shared/lib/hooks/useConditionalEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextColor } from 'shared/ui/text/Text';
import { ArticleViewType } from 'entities/Article/model/types/types';
import { ViewSwitcher } from 'widgets/viewSwitcher';
import { fetchAllArticles } from '../model/services/fetchAllArticles';
import { ArticlePageActions, ArticlePageReducer, articlePageSelectors } from '../model/slice/articlePageSlice';
import {
    getArticlePageError,
    getArticlePageIsLoading,
    getArticlePageView,
} from '../model/selectors/articlePageSelectors';
import cl from './ArticlePage.module.scss';

export interface ArticlePageProps {
    extraClassName?: string;
}

const reducers = {
    articlePage: ArticlePageReducer,
};

const ArticlePage = ({ extraClassName }: ArticlePageProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const articles = useSelector(articlePageSelectors.selectAll);
    const error = useSelector(getArticlePageError);
    const isLoading = useSelector(getArticlePageIsLoading);
    const viewType = useSelector(getArticlePageView);

    useConditionalEffect(() => {
        dispatch(fetchAllArticles());
        dispatch(ArticlePageActions.init());
    });

    const setViewHandler = useCallback((view: ArticleViewType) => {
        dispatch(ArticlePageActions.setView(view));
    }, [dispatch]);

    if (error) {
        return (
            <div className={classNames(cl.ArticleDetailsPage, {}, [extraClassName])}>
                <Text
                    textColor={TextColor.ERROR}
                    title={t('Произошла ошибка при загрузке статей')}
                    text={t('Попробуйте обновить страницу.')}
                />
            </div>
        );
    }

    return (
        <DynamicReducersHandler reducers={reducers}>
            <div className={classNames(cl.ArticlePage, {}, [extraClassName])}>
                <div className={cl.header}>
                    <ViewSwitcher
                        view={viewType}
                        onClick={setViewHandler}
                        extraClassName={cl.viewControls}
                    />
                </div>
                <div className={cl.content}>
                    <ArticleList
                        isLoading={isLoading}
                        articles={articles}
                        viewType={viewType}
                    />
                </div>
            </div>
        </DynamicReducersHandler>
    );
};

export default memo(ArticlePage);
