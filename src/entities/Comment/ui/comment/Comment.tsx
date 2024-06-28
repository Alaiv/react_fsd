import { classNames } from 'shared/lib/classNames';
import { IComment } from 'pages/articleDetailsPage/model/types';
import { Text } from 'shared/ui/text/Text';
import { Avatar } from 'shared/ui/avatar/Avatar';
import { memo } from 'react';
import cl from './Comment.module.scss';

export interface CommentProps {
    extraClassName?: string;
    comment: IComment;
}

export const Comment = memo((props: CommentProps) => {
    const {
        extraClassName,
        comment,
    } = props;

    return (
        <div className={classNames(cl.Comment, {}, [extraClassName])}>
            <div className={cl.userInfo}>
                {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} alt={comment.user.username} />}
                <Text text={comment.user.username} />
            </div>
            <Text text={comment.text || ''} />
        </div>
    );
});
