import { StateSchema } from '@/app/providers/storeProvider';
import { getPassword } from './getPassword';

describe('getPassword.test', () => {
    test('gets correct state value', () => {
        const state: DeepPartial<StateSchema> = {
            auth: {
                password: 'pass123',
            },
        };

        expect(getPassword(state as StateSchema)).toEqual('pass123');
    });
});
