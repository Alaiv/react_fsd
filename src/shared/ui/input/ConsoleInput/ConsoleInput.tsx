import { classNames } from 'shared/lib/classNames';
import {
    InputHTMLAttributes, memo, useCallback, useEffect, useRef, useState,
} from 'react';
import cl from './ConsoleInput.module.scss';

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export interface ConsoleInputProps extends HtmlInputProps {
    extraClassName?: string;
    value?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
}

export const ConsoleInput = memo((props: ConsoleInputProps) => {
    const {
        extraClassName,
        value = '',
        onChange,
        type = 'text',
        placeholder,
        autoFocus = false,
        ...otherProps
    } = props;

    const [focused, setIsFocused] = useState<boolean>(false);
    const [position, setPosition] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const onChangeHandler = useCallback((e) => {
        onChange?.(e.target.value);
        setPosition(value.length);
    }, [onChange, value.length]);

    const onBlurAction = () => {
        setIsFocused(false);
    };

    const onFocusAction = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setPosition(e?.target?.selectionStart);
    };

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            inputRef?.current?.focus();
        }
    }, [autoFocus]);

    return (
        <div className={classNames(cl.ConsoleInput, {}, [extraClassName])}>
            {placeholder && (
                <div className={cl.placeHolder}>{`${placeholder}>`}</div>
            )}
            <div className={cl.caretInput}>
                <input
                    ref={inputRef}
                    className={cl.input}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    {...otherProps}
                    onBlur={onBlurAction}
                    onFocus={onFocusAction}
                    onSelect={onSelect}
                />
                {
                    focused && <span className={cl.caret} style={{ left: position * 9 }} />
                }
            </div>
        </div>
    );
});
