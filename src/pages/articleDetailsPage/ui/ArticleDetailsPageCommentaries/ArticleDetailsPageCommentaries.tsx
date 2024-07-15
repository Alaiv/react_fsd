import { useTranslation } from 'react-i18next';
import { memo, Suspense, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Text, TextSize } from '@/shared/ui/text/Text';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { classNames } from '@/shared/lib/classNames';
import { AddNewCommentForm } from '@/features/addNewComment';
import { CommentList } from '@/entities/Comment';
import { useConditionalEffect } from '@/shared/lib/hooks/useConditionalEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Loader } from '@/shared/ui/loader/Loader';
import { sendArticleComment } from '../../model/services/sendArticleComment/sendArticleComment';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { commentsSelectors } from '../../model/slice/ArticleDetailsCommentSlice';

interface ArticleDetailsPageCommentariesProps {
    extraClassName?: string;
    id?: string;
}

export const ArticleDetailsPageCommentaries = memo((props: ArticleDetailsPageCommentariesProps) => {
    const { extraClassName, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const comments = useSelector(commentsSelectors.selectAll);

    useConditionalEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const sendCommentHandler = useCallback((text: string | undefined) => {
        dispatch(sendArticleComment(text));
    }, [dispatch]);

    return (
        <VStack gap={8} max className={classNames('', {}, [extraClassName])}>
            <Text title={t('Комментарии')} size={TextSize.L} />
            <Suspense fallback={<Loader />}>
                <AddNewCommentForm sendComment={sendCommentHandler} />
            </Suspense>
            <CommentList comments={comments} />
        </VStack>
    );
});
