import { classNames } from 'shared/lib/classNames';
import React, { FunctionComponent, SVGAttributes } from 'react';
import cl from './Icon.module.scss';

export interface IconProps {
    extraClassName?: string;
    Svg?: FunctionComponent<SVGAttributes<SVGElement>>;
}

export const Icon = ({ extraClassName, Svg }: IconProps) => (
    // @ts-ignore
    <Svg className={classNames(cl.Icon, {}, [extraClassName])} />
);
