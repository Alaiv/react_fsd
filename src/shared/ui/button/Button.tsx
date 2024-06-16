import { classNames } from 'shared/lib/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cl from './Button.module.scss';

export const enum ButtonType {
    CLEAR = 'clear'
}

export const enum ButtonText {
    PRIMARY = 'primary',
    INVERTED = 'inverted'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    extraClassName?: string;
    btnType?: ButtonType;
    btnText?: ButtonText;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        extraClassName,
        children,
        btnType = ButtonType.CLEAR,
        btnText = ButtonText.PRIMARY,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={
                classNames(
                    cl.Button,
                    {},
                    [extraClassName, cl[btnType], cl[btnText]],
                )
            }
            {...otherProps}
        >
            {children}
        </button>
    );
};
