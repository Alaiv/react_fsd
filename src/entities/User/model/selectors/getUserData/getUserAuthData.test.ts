import { StateSchema } from 'app/providers/storeProvider';
import { UserSchema } from '../../types/UserSchema';
import { getUserAuthData } from '../../../model/selectors/getUserData/getUserAuthData';

describe('getPassword.test', () => {
    test('gets correct state value', () => {
        const schema: UserSchema = {
            authData: {
                username: 'user123',
                id: 123,
            },
        };

        const state: DeepPartial<StateSchema> = {
            user: schema,
        };

        expect(getUserAuthData(state as StateSchema)).toEqual(schema.authData);
    });

    test('gets correct state value undefined', () => {
        const schema: UserSchema = {
            authData: undefined,
        };

        const state: DeepPartial<StateSchema> = {
            user: schema,
        };

        expect(getUserAuthData(state as StateSchema)).toEqual(undefined);
    });
});
