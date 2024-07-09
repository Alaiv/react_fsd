import { StateSchema } from 'app/providers/storeProvider';
import { ProfileError } from '../../const/constants';
import { ProfileSchema } from '../../types/ProfileSchema';
import { getProfileValidationErrors } from './getProfileValidationErrors';

describe('getPassword.test', () => {
    test('gets correct state value', () => {
        const errors = [ProfileError.SERVER_ERROR, ProfileError.SERVER_ERROR];
        const schema: ProfileSchema = {
            profileInfo: {},
            isLoading: false,
            readonly: false,
            validationErrors: errors,
        };

        const state: DeepPartial<StateSchema> = {
            profile: schema,
        };

        expect(getProfileValidationErrors(state as StateSchema)).toEqual(errors);
    });

    test('gets correct state value undefined', () => {
        const state: DeepPartial<StateSchema> = {
            profile: undefined,
        };

        expect(getProfileValidationErrors(state as StateSchema)).toEqual(undefined);
    });
});
