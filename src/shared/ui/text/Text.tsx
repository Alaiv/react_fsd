import { classNames } from 'shared/lib/classNames';
import cl from './Text.module.scss';

export enum TextColor {
    NORMAL = 'normal',
    ERROR = 'error',
}

export interface TextProps {
    extraClassName?: string;
    title?: string;
    text?: string;
    textColor?: TextColor;
}

export const Text = (props: TextProps) => {
    const {
        extraClassName,
        text,
        title,
        textColor = TextColor.NORMAL,
    } = props;

    return (
        <div className={classNames(cl.Text, {}, [extraClassName, cl[textColor]])}>
            {title && <p className={cl.title}>{title}</p>}
            {text && <p className={cl.text}>{text}</p>}
        </div>
    );
};
