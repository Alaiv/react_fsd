import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import { Text } from '@/shared/ui/text/Text';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { Skeleton } from '@/shared/ui/skeleton/Skeleton';
import { NotificationItem } from '../../ui/NotificationItem/NotificationItem';
import { useGetNotifications } from '../../api/notificationApi';

interface NotificationProps {
    extraClassName?: string;
}

export const NotificationList = memo((props: NotificationProps) => {
    const { extraClassName } = props;
    const { t } = useTranslation();
    const { data: notifications, isLoading } = useGetNotifications(null, {
        pollingInterval: 5000,
    });

    if (isLoading) {
        return (
            <VStack gap={16} max extraClassName={classNames('', {}, [extraClassName])}>
                <Skeleton width="100%" height={50} borderRadius="8px" />
                <Skeleton width="100%" height={50} borderRadius="8px" />
                <Skeleton width="100%" height={50} borderRadius="8px" />
            </VStack>
        );
    }

    if (!notifications && !isLoading) {
        return <Text text={t('Уведомления отсутствуют')} />;
    }

    return (
        <VStack gap={16} max extraClassName={classNames('', {}, [extraClassName])}>
            {notifications?.map((item) => <NotificationItem key={item.id} notification={item} />)}
        </VStack>
    );
});
