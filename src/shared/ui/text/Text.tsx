import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
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

export type TagType = 'h1' | 'h2' | 'h3';

const TitleTagClasses: Record<TextSize, TagType> = {
    [TextSize.M]: 'h3',
    [TextSize.L]: 'h2',
    [TextSize.XL]: 'h1',
};

export interface TextProps {
    extraClassName?: string;
    title?: string;
    text?: string;
    textColor?: TextColor;
    align?: TextAlignment;
    size?: TextSize;
    'data-testid'?: string;
}

export const Text = memo((props: TextProps) => {
    const {
        extraClassName,
        text,
        title,
        textColor = TextColor.NORMAL,
        align = TextAlignment.LEFT,
        size = TextSize.M,
        'data-testid': dataTestId = 'Text',
    } = props;

    const classes = [
        extraClassName,
        cl[textColor],
        cl[align],
        cl[size],
    ];

    const TitleTag = TitleTagClasses[size];

    return (
        <div className={classNames(cl.Text, {}, classes)}>
            {title && <TitleTag data-testid={`${dataTestId}.Title`} className={cl.title}>{title}</TitleTag>}
            {text && <p data-testid={`${dataTestId}.Text`} className={cl.text}>{text}</p>}
        </div>
    );
});
