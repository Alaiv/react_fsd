import { classNames } from 'shared/lib/classNames';
import { HTMLProps } from 'react';
import cl from './Card.module.scss';

export interface CardProps extends HTMLProps<HTMLDivElement> {
    extraClassName?: string;
    children?: React.ReactNode;
}

export const Card = ({ extraClassName, children, ...props }: CardProps) => (
    <div {...props} className={classNames(cl.Card, {}, [extraClassName])}>
        {children}
    </div>
);
