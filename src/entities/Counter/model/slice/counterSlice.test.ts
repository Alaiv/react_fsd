import { StateSchema } from 'app/providers/storeProvider';
import { CounterActions, reducer } from '../slice/counterSlice';
import { CounterSchema } from '../types/CounterSchema';

describe('counterSlice.test', () => {
    test('increment value', () => {
        const state: CounterSchema = {
            value: 5,
        };

        expect(reducer(state, CounterActions.increment)).toEqual({ value: 6 });
    });

    test('decrement value', () => {
        const state: CounterSchema = {
            value: 5,
        };

        expect(reducer(state, CounterActions.decrement)).toEqual({ value: 4 });
    });

    test('decrement value', () => {
        expect(reducer(undefined, CounterActions.decrement)).toEqual({ value: -1 });
    });
});
