import { Button } from 'shared/ui/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { CounterActions } from 'entities/Counter/model/slice/counterSlice';
import { useTranslation } from 'react-i18next';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();

    const inc = () => {
        dispatch(CounterActions.increment());
    };

    const dec = () => {
        dispatch(CounterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="counter-val">{counterValue}</h1>
            <Button data-testid="inc" onClick={inc}>{t('increment')}</Button>
            <Button data-testid="dec" onClick={dec}>{t('decrement')}</Button>
        </div>
    );
};
