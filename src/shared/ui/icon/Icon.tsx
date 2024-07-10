import { classNames } from 'shared/lib/classNames';
import React, { FunctionComponent, SVGAttributes } from 'react';
import cl from './Icon.module.scss';

export interface IconProps {
    extraClassName?: string;
    Svg?: FunctionComponent<SVGAttributes<SVGElement>>;
    inverted?: boolean;
}

export const Icon = ({ extraClassName, Svg, inverted }: IconProps) => (
    // @ts-ignore
    <Svg className={classNames(inverted ? cl.Inverted : cl.Icon, {}, [extraClassName])} />
);
