import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextColor, TextSize } from 'shared/ui/text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { CommentList } from 'entities/Comment';
import { DynamicReducersHandler } from 'shared/lib/components/DynamicReducersHandler';
import { useConditionalEffect } from 'shared/lib/hooks/useConditionalEffect';
import { AddNewCommentForm } from 'features/addNewComment';
import { Page } from 'shared/ui/Page/Page';
import { sendArticleComment } from '../model/services/sendArticleComment/sendArticleComment';
import { ArticleDetailsCommentSliceReducer, commentsSelectors } from '../model/slice/ArticleDetailsCommentSlice';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import cl from './ArticleDetailsPage.module.scss';

export interface ArticleDetailsPageProps {
    extraClassName?: string;
}

const reducers = {
    articleComments: ArticleDetailsCommentSliceReducer,
};

const ArticleDetailsPage = ({ extraClassName }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();
    const isNotStoryBook = __PROJECT__ !== 'storybook';

    const comments = useSelector(commentsSelectors.selectAll);

    useConditionalEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
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
                <ArticleDetails id={id || '1'} />
                <div className={cl.commentsBlock}>
                    <Text title={t('Комментарии')} size={TextSize.L} />
                    <AddNewCommentForm sendComment={sendCommentHandler} />
                    <CommentList comments={comments} />
                </div>
            </Page>
        </DynamicReducersHandler>
    );
};

export default memo(ArticleDetailsPage);
