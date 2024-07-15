import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import { IComment } from '@/pages/articleDetailsPage/model/types';
import { Text } from '@/shared/ui/text/Text';
import { getIsLoading } from '@/pages/articleDetailsPage/model/selectors/commentSelectors';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { Comment } from '../../ui/comment/Comment';

export interface CommentListProps {
    extraClassName?: string;
    comments?: IComment[]
}

export const CommentList = memo((props: CommentListProps) => {
    const { extraClassName, comments } = props;
    const { t } = useTranslation();
    const isLoading = useSelector(getIsLoading);

    return (
        <VStack gap={16} max extraClassName={classNames('', {}, [extraClassName])}>
            {
                comments?.length
                    ? comments.map((comment) => (
                        <Comment
                            key={comment.id}
                            comment={comment}
                            isLoading={isLoading}
                        />
                    ))
                    : <Text text={t('Комментарии отсутствуют')} />
            }
        </VStack>
    );
});
