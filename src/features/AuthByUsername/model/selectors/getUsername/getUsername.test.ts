import { StateSchema } from '@/app/providers/storeProvider';
import { getUsername } from './getUsername';

describe('getUsername.test', () => {
    test('gets correct state value', () => {
        const state: DeepPartial<StateSchema> = {
            auth: {
                username: 'user132',
            },
        };

        expect(getUsername(state as StateSchema)).toEqual('user132');
    });
});
