import { StateSchema } from '@/app/providers/storeProvider';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { getFormData } from './getFormData';
import { ProfileSchema } from '../../types/ProfileSchema';

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
            profileInfo: undefined,
            isLoading: false,
            readonly: false,
            error: 'error',
            formData: data,
        };

        const state: DeepPartial<StateSchema> = {
            profile: schema,
        };

        expect(getFormData(state as StateSchema)).toEqual(data);
    });

    test('gets correct state value undefined', () => {
        const state: DeepPartial<StateSchema> = {
            profile: undefined,
        };

        expect(getFormData(state as StateSchema)).toEqual(undefined);
    });
});
