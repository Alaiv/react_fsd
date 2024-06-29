import { classNames } from 'shared/lib/classNames';
import { IComment } from 'pages/articleDetailsPage/model/types';
import { Text } from 'shared/ui/text/Text';
import { Avatar } from 'shared/ui/avatar/Avatar';
import { memo } from 'react';
import { RoutePaths } from 'shared/config/routeConfig/RouteConfig';
import { MyLink } from 'shared/ui/link/MyLink';
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
            <MyLink extraClassName={cl.userInfo} to={`${RoutePaths.profile}${comment?.user?.id}`}>
                {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} alt={comment.user.username} />}
                <Text text={comment.user.username} />
            </MyLink>
            <Text text={comment.text || ''} />
        </div>
    );
});
