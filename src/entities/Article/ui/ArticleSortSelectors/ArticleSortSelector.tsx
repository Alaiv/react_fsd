import React, { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import { Select, SelectOption } from '@/shared/ui/select/Select';
import { SortOrder } from '@/shared/lib/types/sortOrderTypes';
import { ArticleSortType } from '../../model/const/constants';
import cl from './ArticleSortSelector.module.scss';

export interface ArticleSortSelectorProps {
    extraClassName?: string,
    sortCallback: (_: ArticleSortType) => void,
    orderCallback: (_: SortOrder) => void,
    order?: SortOrder,
    sort?: ArticleSortType
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { t } = useTranslation();
    const {
        extraClassName,
        sortCallback,
        orderCallback,
        order,
        sort,
    } = props;

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            text: t('возрастанию'),
        },
        {
            value: 'desc',
            text: t('убыванию'),
        },
    ], [t]);

    const sortOptions = useMemo<SelectOption<ArticleSortType>[]>(() => [
        {
            value: ArticleSortType.DATE,
            text: t('дате'),
        },
        {
            value: ArticleSortType.TITLE,
            text: t('заголовку'),
        },
        {
            value: ArticleSortType.VIEWS,
            text: t('просмотрам'),
        },
    ], [t]);

    return (
        <div className={classNames(cl.ArticleSortSelector, {}, [extraClassName])}>
            <Select onChange={sortCallback} value={sort} options={sortOptions} label={t('По')} />
            <Select onChange={orderCallback} value={order} options={orderOptions} label={t('По')} />
        </div>
    );
});
