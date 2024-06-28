import { classNames } from 'shared/lib/classNames';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { IComment } from 'pages/articleDetailsPage/model/types';
import { Loader } from 'shared/ui/loader/Loader';
import { Text, TextColor } from 'shared/ui/text/Text';
import { useTranslation } from 'react-i18next';
import { getError, getIsLoading } from 'pages/articleDetailsPage/model/selectors/commentSelectors';
import cl from './CommentList.module.scss';
import { Comment } from '../../ui/comment/Comment';

export interface CommentListProps {
    extraClassName?: string;
    comments?: IComment[]
}

export const CommentList = memo((props: CommentListProps) => {
    const { extraClassName, comments } = props;
    const { t } = useTranslation();
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    if (isLoading) {
        return (
            <Loader />
        );
    }

    if (error) {
        return (
            <Text text={error} textColor={TextColor.ERROR} />
        );
    }

    return (
        <div className={classNames(cl.CommentList, {}, [extraClassName])}>
            {
                comments?.length
                    ? comments.map((comment) => (
                        <Comment key={comment.id} comment={comment} extraClassName={cl.comment} />
                    ))
                    : <Text text={t('Комментарии отсутствуют')} />
            }
        </div>
    );
});
