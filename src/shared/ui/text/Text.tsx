import { classNames } from 'shared/lib/classNames';
import { memo } from 'react';
import cl from './Text.module.scss';

export enum TextColor {
    NORMAL = 'normal',
    ERROR = 'error',
}

export enum TextAlignment {
    CENTER = 'center',
    LEFT = 'left',
    RIGHT = 'right',
}

export interface TextProps {
    extraClassName?: string;
    title?: string;
    text?: string;
    textColor?: TextColor;
    align?: TextAlignment;
}

export const Text = memo((props: TextProps) => {
    const {
        extraClassName,
        text,
        title,
        textColor = TextColor.NORMAL,
        align = TextAlignment.LEFT,
    } = props;

    return (
        <div className={classNames(cl.Text, {}, [extraClassName, cl[textColor], cl[align]])}>
            {title && <p className={cl.title}>{title}</p>}
            {text && <p className={cl.text}>{text}</p>}
        </div>
    );
});
