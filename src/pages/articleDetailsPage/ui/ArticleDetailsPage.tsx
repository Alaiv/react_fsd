import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextColor, TextSize } from 'shared/ui/text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { CommentList } from 'entities/Comment';
import { DynamicReducersHandler } from 'shared/lib/components/DynamicReducersHandler';
import { useConditionalEffect } from 'shared/lib/hooks/useConditionalEffect';
import { CommentSliceReducer, commentsSelectors } from '../model/slice/CommentSlice';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';
import cl from './ArticleDetailsPage.module.scss';

export interface ArticleDetailsPageProps {
    extraClassName?: string;
}

const reducers = {
    comments: CommentSliceReducer,
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

    if (!id && isNotStoryBook) {
        return (
            <div className={classNames(cl.ArticleDetailsPage, {}, [extraClassName])}>
                <Text textColor={TextColor.ERROR} text={t('Статья не найдена')} />
            </div>
        );
    }

    return (
        <DynamicReducersHandler reducers={reducers} isRemove>
            <div className={classNames(cl.ArticleDetailsPage, {}, [extraClassName])}>
                <ArticleDetails id={id || '1'} />
                <div className={cl.commentsBlock}>
                    <Text title={t('Комментарии')} size={TextSize.L} />
                    <CommentList comments={comments} />
                </div>
            </div>
        </DynamicReducersHandler>
    );
};

export default memo(ArticleDetailsPage);
