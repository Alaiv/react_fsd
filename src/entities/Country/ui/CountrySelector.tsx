import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/ui/select/Select';
import { classNames } from 'shared/lib/classNames';
import { memo, useCallback } from 'react';
import { HStack } from 'shared/ui/Stack/HStack/HStack';
import { Text } from 'shared/ui/text/Text';
import { AppListBox } from 'shared/ui/Popups/ui/AppListBox/AppListBox';
import { Country } from '../model/types/types';

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
        <HStack gap={8}>
            <Text text={t('Выберите страну')} />
            <AppListBox
                items={countries}
                defaultValue={t('Выберите страну')}
                onValueChange={onChangeHandler}
                value={value}
                extraClassName={extraClassName}
                readonly={readonly}
                direction="top right"
            />
        </HStack>
    );
});
