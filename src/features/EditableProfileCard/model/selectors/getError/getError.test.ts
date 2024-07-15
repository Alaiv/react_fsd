import { StateSchema } from '@/app/providers/storeProvider';
import { UserSchema } from '@/entities/User';
import { getUserAuthData } from '@/entities/User/model/selectors/getUserData/getUserAuthData';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ProfileSchema } from '../../types/ProfileSchema';
import { getError } from './getError';

// profileInfo: {
//     username: 'user123',
//         age: 12,
//         city: 'asda',
//         first: 'asdasd',
//         lastname: 'asdasd',
//         country: Country.England,
//         currency: Currency.RUB,
//         avatar: "asdasdas"
// }

describe('getPassword.test', () => {
    test('gets correct state value', () => {
        const schema: ProfileSchema = {
            profileInfo: undefined,
            isLoading: false,
            readonly: false,
            error: 'error',
        };

        const state: DeepPartial<StateSchema> = {
            profile: schema,
        };

        expect(getError(state as StateSchema)).toEqual('error');
    });

    test('gets correct state value undefined', () => {
        const schema: ProfileSchema = {
            profileInfo: undefined,
            isLoading: false,
            readonly: false,
        };

        const state: DeepPartial<StateSchema> = {
            profile: schema,
        };

        expect(getError(state as StateSchema)).toEqual(undefined);
    });
});
