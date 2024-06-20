import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounter.test', () => {
    test('return correct value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 5 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(5);
    });
});
