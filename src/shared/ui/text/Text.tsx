import { classNames } from 'shared/lib/classNames';
import { memo } from 'react';
import cl from './Text.module.scss';

export enum TextColor {
    NORMAL = 'normal',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export enum TextAlignment {
    CENTER = 'center',
    LEFT = 'left',
    RIGHT = 'right',
}

export enum TextSize {
    M = 'm_size',
    L = 'l_size',
    XL = 'xl_size',
}

export interface TextProps {
    extraClassName?: string;
    title?: string;
    text?: string;
    textColor?: TextColor;
    align?: TextAlignment;
    size?: TextSize;
}

export const Text = memo((props: TextProps) => {
    const {
        extraClassName,
        text,
        title,
        textColor = TextColor.NORMAL,
        align = TextAlignment.LEFT,
        size = TextSize.M,
    } = props;

    return (
        <div className={classNames(cl.Text, {}, [extraClassName, cl[textColor], cl[align], cl[size]])}>
            {title && <p className={cl.title}>{title}</p>}
            {text && <p className={cl.text}>{text}</p>}
        </div>
    );
});
