import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/ui/select/Select';
import { classNames } from 'shared/lib/classNames';
import { memo, useCallback } from 'react';
import { AppListBox } from 'shared/ui/AppListBox/AppListBox';
import { Text } from 'shared/ui/text/Text';
import { HStack } from 'shared/ui/Stack/HStack/HStack';
import { Currency } from '../model/types/types';

export interface CurrencySelectorProps {
    extraClassName?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean
}

const currencies: SelectOption<Currency>[] = [
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
        <HStack gap={8}>
            <Text text={t('Выберите валюту')} />
            <AppListBox
                items={currencies}
                defaultValue={t('Выберите валюту')}
                onValueChange={onChangeHandler}
                value={value}
                extraClassName={extraClassName}
                readonly={readonly}
            />
        </HStack>
    );
});
