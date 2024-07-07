import { classNames } from 'shared/lib/classNames';
import {
    InputHTMLAttributes, memo, useCallback, useEffect, useRef, useState,
} from 'react';
import { HStack } from '../../Stack/HStack/HStack';
import cl from './ConsoleInput.module.scss';

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>

export interface ConsoleInputProps extends HtmlInputProps {
    extraClassName?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
    readonly?: boolean;
}

export const ConsoleInput = memo((props: ConsoleInputProps) => {
    const {
        extraClassName,
        value = '',
        onChange,
        type = 'text',
        placeholder,
        autoFocus = false,
        readonly = false,
        ...otherProps
    } = props;

    const [focused, setIsFocused] = useState<boolean>(false);
    const [position, setPosition] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const isCaretVisible = focused && !readonly;

    const onChangeHandler = useCallback((e) => {
        onChange?.(e.target.value);
        setPosition(e.target.value.length);
    }, [onChange]);

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
        <HStack gap={8} max className={classNames('', { [cl.readonly]: readonly }, [extraClassName])}>
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
                    isCaretVisible && <span className={cl.caret} style={{ left: position * 9 }} />
                }
            </div>
        </HStack>
    );
});
