import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter';

describe('getCounter', () => {
    test('get counter return correct state', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 5 },
        };

        expect(getCounter(state as StateSchema)).toEqual({ value: 5 });
    });
});
