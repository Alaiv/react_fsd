import { ButtonHTMLAttributes, FC } from 'react';
import { AdditionalMods, classNames } from '@/shared/lib/classNames';
import cl from './Button.module.scss';

export const enum ButtonType {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export const enum ButtonText {
    PRIMARY = 'primary',
    INVERTED = 'inverted'
}

export const enum ButtonSize {
    M = 'sizeM',
    L = 'sizeL',
    XL = 'sizeXl'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    extraClassName?: string;
    btnType?: ButtonType;
    btnText?: ButtonText;
    square?: boolean;
    buttonSize?: ButtonSize;
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        extraClassName,
        children,
        btnType = ButtonType.BACKGROUND,
        btnText = ButtonText.PRIMARY,
        square = false,
        buttonSize = ButtonSize.M,
        disabled = false,
        ...otherProps
    } = props;

    const additionalClasses: AdditionalMods = [
        extraClassName,
        cl[btnType],
        cl[btnText],
        cl[buttonSize],
    ];

    return (
        <button
            type="button"
            className={
                classNames(
                    cl.Button,
                    { [cl.square]: square, [cl.disabled]: disabled },
                    additionalClasses,
                )
            }
            {...otherProps}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
