import { Listbox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames';
import { DropDownDirection } from 'app/types/types';
import { HStack } from '../Stack/HStack/HStack';
import { Button, ButtonType } from '../button/Button';
import cl from './AppListBox.module.scss';

export interface ListBoxItem {
    value: string;
    text: ReactNode,
    disabled?: boolean;
}

export interface AppListBoxProps {
    extraClassName?: string;
    items: ListBoxItem[];
    value?: string;
    defaultValue: string;
    onValueChange: (value: string) => void;
    readonly?: boolean,
    direction?: DropDownDirection,
}

const directionClasses: Record<DropDownDirection, string> = {
    'top left': cl.topLeftDirection,
    'top right': cl.topRightDirection,
    'down left': cl.downLeftDirection,
    'down right': cl.downRightDirection,
};

export function AppListBox(props: AppListBoxProps) {
    const {
        extraClassName,
        items,
        value,
        defaultValue,
        onValueChange,
        readonly,
        direction = 'down right',
    } = props;

    const options = [
        directionClasses[direction],
    ];

    return (
        <HStack gap={4}>
            <Listbox
                as="div"
                value={value}
                onChange={onValueChange}
                className={classNames(cl.AppListBox, {}, [extraClassName])}
            >
                <Listbox.Button as={Fragment}>
                    <Button
                        disabled={readonly}
                        btnType={ButtonType.OUTLINE}
                        extraClassName={classNames(cl.btn, { [cl.readonly]: readonly })}
                    >
                        {value ?? defaultValue}
                    </Button>
                </Listbox.Button>
                <Listbox.Options className={classNames(cl.options, {}, options)}>
                    {items.map((item) => (
                        <Listbox.Option key={item.value} value={item.value} disabled={item.disabled}>
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cl.item, { [cl.active]: active, [cl.disabled]: item.disabled })}
                                >
                                    {selected && '$'}
                                    {item.text}
                                </li>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </HStack>
    );
}
