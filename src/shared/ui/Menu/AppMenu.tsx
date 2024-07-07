import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { DropDownDirection } from 'app/types/types';
import { classNames } from 'shared/lib/classNames';
import { MyLink } from '../link/MyLink';
import { Button, ButtonType } from '../button/Button';
import cl from './AppMenu.module.scss';

export interface AppMenuItem {
    disabled?: boolean;
    content?: ReactNode,
    href?: string,
    onClick?: () => void;
}

export interface AppMenuProps {
    extraClassName?: string;
    items: AppMenuItem[];
    trigger: ReactNode;
    direction?: DropDownDirection,
}

const directionClasses: Record<DropDownDirection, string> = {
    'top left': cl.topLeftDirection,
    'top right': cl.topRightDirection,
    'down left': cl.downLeftDirection,
    'down right': cl.downRightDirection,
};

export function AppMenu(props: AppMenuProps) {
    const {
        extraClassName,
        items,
        trigger,
        direction = 'down left',
    } = props;

    const options = [
        directionClasses[direction],
    ];

    return (
        <Menu as="div" className={classNames(cl.AppMenu, {}, [extraClassName])}>
            <Menu.Button className={cl.lbtn}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cl.items, {}, options)}>
                {items.map((item) => {
                    const content = ({ active }: {active: boolean}) => (
                        <Button
                            extraClassName={classNames(cl.item, { [cl.active]: active })}
                            onClick={item.onClick}
                            disabled={item.disabled}
                            btnType={ButtonType.CLEAR}
                        >
                            {item.content}
                        </Button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item as={MyLink} to={item.href} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
}
