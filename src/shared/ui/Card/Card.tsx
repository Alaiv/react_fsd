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
    type?: CardType;
    fullWidth?: boolean
}

export const Card = ({
    extraClassName, children, type = CardType.NORMAL, fullWidth, ...props
}: CardProps) => (
    <div {...props} className={classNames(cl.Card, { [cl.fullWidth]: fullWidth }, [extraClassName, cl[type]])}>
        {children}
    </div>
);
