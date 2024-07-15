import { memo, ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames';
import { DropDownDirection } from '@/app/types/types';
import { directionClasses } from '../../styles/directions';
import popCl from '../../styles/Popup.module.scss';
import cl from './Popover.module.scss';

interface PopoverProps {
    extraClassName?: string;
    trigger: ReactNode;
    direction?: DropDownDirection,
    children?: ReactNode,
}

export const Popover = memo((props: PopoverProps) => {
    const {
        extraClassName,
        direction = 'down left',
        trigger,
        children,
    } = props;
    const options = [
        directionClasses[direction],
    ];
    return (
        <HPopover className={classNames(popCl.Popup, {}, [extraClassName])}>
            <HPopover.Button className={popCl.trigger}>
                {trigger}
            </HPopover.Button>
            <HPopover.Panel
                className={classNames(cl.popover, {}, options)}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
});
