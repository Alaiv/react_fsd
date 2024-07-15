import { StateSchema } from '@/app/providers/storeProvider';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ProfileSchema } from '../../types/ProfileSchema';
import { getProfileInfoData } from './getProfileInfoData';

describe('getPassword.test', () => {
    test('gets correct state value', () => {
        const data = {
            username: 'user123',
            age: 12,
            city: 'asda',
            first: 'asdasd',
            lastname: 'asdasd',
            country: Country.England,
            currency: Currency.RUB,
            avatar: 'asdasdas',
        };

        const schema: ProfileSchema = {
            profileInfo: data,
            isLoading: false,
            readonly: false,
        };

        const state: DeepPartial<StateSchema> = {
            profile: schema,
        };

        expect(getProfileInfoData(state as StateSchema)).toEqual(data);
    });

    test('gets correct state value undefined', () => {
        const state: DeepPartial<StateSchema> = {
            profile: undefined,
        };

        expect(getProfileInfoData(state as StateSchema)).toEqual(undefined);
    });
});
