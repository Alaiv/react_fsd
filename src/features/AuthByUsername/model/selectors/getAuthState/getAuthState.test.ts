import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { AuthSchema } from '../../type/authSchema';
import { getAuthState } from './getAuthState';

describe('getPassword.test', () => {
    test('gets correct state value', () => {
        const schema: AuthSchema = {
            username: 'user123',
            password: 'pass123',
            isLoading: true,
            error: 'user123',
        };

        const state: DeepPartial<StateSchema> = {
            auth: schema,
        };

        expect(getAuthState(state as StateSchema)).toEqual(schema);
    });
});
