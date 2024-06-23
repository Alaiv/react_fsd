import { StateSchema } from 'app/providers/storeProvider';
import { getIsLoading } from './getIsLoading';

describe('getPassword.test', () => {
    test('gets correct state value', () => {
        const state: DeepPartial<StateSchema> = {
            auth: {
                isLoading: true,
            },
        };

        expect(getIsLoading(state as StateSchema)).toEqual(true);
    });

    test('gets correct state value undefined', () => {
        const state: DeepPartial<StateSchema> = { };

        expect(getIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
