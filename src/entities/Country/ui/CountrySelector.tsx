import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/ui/select/Select';
import { classNames } from 'shared/lib/classNames';
import { memo, useCallback } from 'react';
import { Country } from 'entities/Country/model/types/types';

export interface CountrySelectorProps {
    extraClassName?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean
}

const countries: SelectOption<Country>[] = [
    { value: Country.Russia, text: Country.Russia },
    { value: Country.Belarus, text: Country.Belarus },
    { value: Country.England, text: Country.England },
];

export const CountrySelector = memo(({
    extraClassName, value, onChange, readonly,
}: CountrySelectorProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((country: string) => {
        onChange?.(country as Country);
    }, [onChange]);

    return (
        <Select
            extraClassName={classNames('', {}, [extraClassName])}
            value={value}
            label={t('Выберите страну')}
            options={countries}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
