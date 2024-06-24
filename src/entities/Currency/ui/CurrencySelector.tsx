import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/ui/select/Select';
import { Currency } from 'entities/Currency';
import { classNames } from 'shared/lib/classNames';
import { memo, useCallback } from 'react';
import cl from './CurrencySelector.module.scss';

export interface CurrencySelectorProps {
    extraClassName?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean
}

const currencies: SelectOption[] = [
    { value: Currency.EUR, text: Currency.EUR },
    { value: Currency.RUB, text: Currency.RUB },
    { value: Currency.USD, text: Currency.USD },
];

export const CurrencySelector = memo(({
    extraClassName, value, onChange, readonly,
}: CurrencySelectorProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((cur: string) => {
        onChange?.(cur as Currency);
    }, [onChange]);

    return (
        <Select
            extraClassName={classNames('', {}, [extraClassName])}
            value={value}
            label={t('Выберите валюту')}
            options={currencies}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
