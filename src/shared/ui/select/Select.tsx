import { ChangeEvent, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cl from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    text: string;
}

export interface SelectProps<T extends string> {
    extraClassName?: string;
    label?: string;
    value?: T;
    onChange?: (value: T) => void;
    options?: SelectOption<T>[];
    readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        extraClassName,
        options,
        label,
        value,
        onChange,
        readonly,
    } = props;

    const jsxOptions = useMemo(() => options?.map((opt: SelectOption<T>) => (
        <option className={cl.option} value={opt.value} key={opt.value}>
            {opt.text}
        </option>
    )), [options]);

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
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
};
