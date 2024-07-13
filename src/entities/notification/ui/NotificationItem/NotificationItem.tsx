import { classNames } from 'shared/lib/classNames';
import { memo } from 'react';
import { Card } from 'shared/ui/Card/Card';
import { Text, TextSize } from 'shared/ui/text/Text';
import cl from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notificationSchema';

interface NotificationProps {
    extraClassName?: string;
    notification: Notification;
}

export const NotificationItem = memo((props: NotificationProps) => {
    const { extraClassName, notification } = props;

    const content = (
        <Card extraClassName={classNames(cl.NotificationItem, {}, [extraClassName])}>
            <Text size={TextSize.L} title={notification.title} text={notification.description} />
        </Card>
    );

    if (notification.href) {
        return (
            <a href={notification.href} target="_blank" rel="noreferrer" className={cl.link}>
                {content}
            </a>
        );
    }

    return content;
});
