import React, { FunctionComponent, SVGAttributes } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cl from './Icon.module.scss';

export interface IconProps extends SVGAttributes<HTMLDivElement> {
    extraClassName?: string;
    Svg?: FunctionComponent<SVGAttributes<SVGElement>>;
    inverted?: boolean;
}

export const Icon = ({
    extraClassName, Svg, inverted, ...rest
}: IconProps) => (
    // @ts-ignore
    <Svg
        className={classNames(inverted ? cl.Inverted : cl.Icon, {}, [extraClassName])}
        {...rest}
    />
);
