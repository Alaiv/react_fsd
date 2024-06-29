import { classNames } from 'shared/lib/classNames';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { IComment } from 'pages/articleDetailsPage/model/types';
import { Text } from 'shared/ui/text/Text';
import { useTranslation } from 'react-i18next';
import { getIsLoading } from 'pages/articleDetailsPage/model/selectors/commentSelectors';
import { Comment } from '../../ui/comment/Comment';
import cl from './CommentList.module.scss';

export interface CommentListProps {
    extraClassName?: string;
    comments?: IComment[]
}

export const CommentList = memo((props: CommentListProps) => {
    const { extraClassName, comments } = props;
    const { t } = useTranslation();
    const isLoading = useSelector(getIsLoading);

    return (
        <div className={classNames(cl.CommentList, {}, [extraClassName])}>
            {
                comments?.length
                    ? comments.map((comment) => (
                        <Comment
                            key={comment.id}
                            comment={comment}
                            extraClassName={cl.comment}
                            isLoading={isLoading}
                        />
                    ))
                    : <Text text={t('Комментарии отсутствуют')} />
            }
        </div>
    );
});
