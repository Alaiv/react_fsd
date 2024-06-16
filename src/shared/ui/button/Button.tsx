import {classNames} from "shared/lib/classNames";
import cl from "./Button.module.scss"
import {ButtonHTMLAttributes, FC} from "react";

export const enum ButtonType {
    CLEAR = 'clear'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    extraClassName?: string;
    btnType?: ButtonType
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        extraClassName,
        children,
        btnType = ButtonType.CLEAR,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(cl.Button, {}, [extraClassName, cl[btnType]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};