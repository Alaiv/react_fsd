import { HTMLProps } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cl from './Card.module.scss';

export enum CardType {
    NORMAL = 'normal',
    OUTLINE = 'outline'
}

export interface CardProps extends HTMLProps<HTMLDivElement> {
    extraClassName?: string;
    children?: React.ReactNode;
    type?: CardType
}

export const Card = ({
    extraClassName, children, type = CardType.NORMAL, ...props
}: CardProps) => (
    <div {...props} className={classNames(cl.Card, {}, [extraClassName, cl[type]])}>
        {children}
    </div>
);
