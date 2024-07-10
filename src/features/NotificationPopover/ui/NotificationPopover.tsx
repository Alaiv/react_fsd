import { classNames } from 'shared/lib/classNames';
import React, { memo } from 'react';
import { Popover } from 'shared/ui/Popups';
import { Button, ButtonType } from 'shared/ui/button/Button';
import { Icon } from 'shared/ui/icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification_icon.svg';
import { NotificationList } from 'entities/notification';
import cl from './NotificationPopover.module.scss';

interface NotificationPopoverProps {
    extraClassName?: string;
}

export const NotificationPopover = memo((props: NotificationPopoverProps) => {
    const { extraClassName } = props;

    return (
        <Popover
            extraClassName={classNames('', {}, [extraClassName])}
            trigger={(
                <Button btnType={ButtonType.CLEAR}>
                    <Icon Svg={NotificationIcon} extraClassName={cl.notif} inverted />
                </Button>
            )}
        >
            <NotificationList extraClassName={cl.notifications} />
        </Popover>
    );
});
