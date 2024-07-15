import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames';
import cl from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'column' | 'row';
export type FlexGap = 4 | 8 | 16 | 32;

const justifyClasses: Record<FlexJustify, string> = {
    start: cl.justifyStart,
    center: cl.justifyCenter,
    end: cl.justifyEnd,
    between: cl.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cl.alignStart,
    center: cl.alignCenter,
    end: cl.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
    column: cl.directionColumn,
    row: cl.directionRow,
};

const gapClasses: Record<FlexGap, string> = {
    4: cl.gap4,
    8: cl.gap8,
    16: cl.gap16,
    32: cl.gap32,
};

export type DivType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface FlexProps extends DivType{
    extraClassName?: string;
    children?: ReactNode;
    justify?: FlexJustify,
    align?: FlexAlign,
    direction?: FlexDirection,
    gap?: FlexGap,
    max?: boolean
}

export const Flex = (props: FlexProps) => {
    const {
        extraClassName,
        children,
        justify = 'center',
        align = 'center',
        direction = 'column',
        gap,
        max,
        ...restProps
    } = props;

    const classes = [
        extraClassName,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];

    const mods: Mods = {
        [cl.max]: max,
    };

    return (
        <div {...restProps} className={classNames(cl.Flex, mods, classes)}>
            {children}
        </div>
    );
};
