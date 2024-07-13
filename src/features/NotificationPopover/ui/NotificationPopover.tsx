import { classNames } from 'shared/lib/classNames';
import React, { memo, useCallback, useState } from 'react';
import { Popover } from 'shared/ui/Popups';
import { Button, ButtonType } from 'shared/ui/button/Button';
import { Icon } from 'shared/ui/icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification_icon.svg';
import { NotificationList } from 'entities/notification';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';
import cl from './NotificationPopover.module.scss';

interface NotificationPopoverProps {
    extraClassName?: string;
}

export const NotificationPopover = memo((props: NotificationPopoverProps) => {
    const { extraClassName } = props;

    const [isOpen, setIsOpen] = useState(false);

    const openDrawerHandler = useCallback(() => {
        setIsOpen(true);
    }, []);

    const closeDrawerHandler = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Button btnType={ButtonType.CLEAR} onClick={openDrawerHandler}>
            <Icon Svg={NotificationIcon} extraClassName={cl.notif} inverted />
        </Button>
    );

    return (
        <div>
            <BrowserView>
                <Popover
                    extraClassName={classNames('', {}, [extraClassName])}
                    trigger={trigger}
                >
                    <NotificationList extraClassName={cl.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={closeDrawerHandler}>
                    <NotificationList />
                </Drawer>
            </MobileView>

        </div>

    );
});
