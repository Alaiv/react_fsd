import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { getError } from './getError';

describe('getPassword.test', () => {
    test('gets correct state value', () => {
        const state: DeepPartial<StateSchema> = {
            auth: {
                error: 'err',
            },
        };

        expect(getError(state as StateSchema)).toEqual('err');
    });

    test('gets correct state value undefined', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getError(state as StateSchema)).toEqual(undefined);
    });
});
