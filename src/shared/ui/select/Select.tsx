import { classNames } from 'shared/lib/classNames';
import {
    ChangeEvent, memo, useCallback, useMemo,
} from 'react';
import cl from './Select.module.scss';

export interface SelectOption {
    value: string;
    text: string;
}

export interface SelectProps {
    extraClassName?: string;
    label?: string;
    value?: string;
    onChange?: (value: string) => void;
    options?: SelectOption[];
    readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
    const {
        extraClassName,
        options,
        label,
        value,
        onChange,
        readonly,
    } = props;

    const jsxOptions = useMemo(() => options?.map((opt: SelectOption) => (
        <option className={cl.option} value={opt.value} key={opt.value}>
            {opt.text}
        </option>
    )), [options]);

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    }, [onChange]);

    return (
        <div className={classNames(cl.SelectWrapper, {}, [extraClassName])}>
            {label && <span className={cl.label}>{`${label}>`}</span>}
            <select
                className={classNames(cl.select, { [cl.readonly]: readonly })}
                value={value}
                onChange={onChangeHandler}
            >
                {jsxOptions}
            </select>
        </div>
    );
});
