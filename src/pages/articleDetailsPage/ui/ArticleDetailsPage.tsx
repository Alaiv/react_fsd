import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextColor, TextSize } from 'shared/ui/text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { CommentList } from 'entities/Comment';
import { DynamicReducersHandler } from 'shared/lib/components/DynamicReducersHandler';
import { useConditionalEffect } from 'shared/lib/hooks/useConditionalEffect';
import { AddNewCommentForm } from 'features/addNewComment';
import { Page } from 'widgets/Page/ui/Page';
import { recommendationSelectors } from 'pages/articleDetailsPage/model/slice/ArticleDetailsRecommendationsSlice';
import {
    getRecommendationsError,
    getRecommendationsIsLoading,
} from 'pages/articleDetailsPage/model/selectors/recommendationsSelectors';
import { fetchArticleRecommendationsList } from '../model/services/fetchRecommendations/fetchRecommendations';
import { ArticleDetailsPageHeader } from '../ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsPageReducer } from '../model/slice';
import { sendArticleComment } from '../model/services/sendArticleComment/sendArticleComment';
import { commentsSelectors } from '../model/slice/ArticleDetailsCommentSlice';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import cl from './ArticleDetailsPage.module.scss';

export interface ArticleDetailsPageProps {
    extraClassName?: string;
}

const reducers = {
    articleDetailsPage: ArticleDetailsPageReducer,
};

const ArticleDetailsPage = ({ extraClassName }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();
    const isNotStoryBook = __PROJECT__ !== 'storybook';
    const comments = useSelector(commentsSelectors.selectAll);
    const recommendations = useSelector(recommendationSelectors.selectAll);
    const recommendationsLoading = useSelector(getRecommendationsIsLoading);
    const recommendationsError = useSelector(getRecommendationsError);

    useConditionalEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendationsList());
    });

    const sendCommentHandler = useCallback((text: string | undefined) => {
        dispatch(sendArticleComment(text));
    }, [dispatch]);

    if (!id && isNotStoryBook) {
        return (
            <div className={classNames(cl.ArticleDetailsPage, {}, [extraClassName])}>
                <Text textColor={TextColor.ERROR} text={t('Статья не найдена')} />
            </div>
        );
    }

    return (
        <DynamicReducersHandler reducers={reducers} isRemove>
            <Page extraClassName={classNames(cl.ArticleDetailsPage, {}, [extraClassName])}>
                <ArticleDetailsPageHeader id={id} />
                <ArticleDetails id={id || '1'} />
                <div className={cl.recommendationsBlock}>
                    <Text title={t('Рекоммендации')} size={TextSize.L} />
                    <ArticleList
                        extraClassName={cl.recommends}
                        articles={recommendations}
                        isLoading={recommendationsLoading}
                        error={recommendationsError}
                        target="_blank"
                    />
                </div>
                <Text title={t('Комментарии')} size={TextSize.L} />
                <AddNewCommentForm sendComment={sendCommentHandler} />
                <CommentList comments={comments} />
            </Page>
        </DynamicReducersHandler>
    );
};

export default memo(ArticleDetailsPage);
