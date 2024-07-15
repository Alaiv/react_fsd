import { StateSchema } from '@/app/providers/storeProvider';
import { ProfileSchema } from '../../types/ProfileSchema';
import { getReadonly } from './getReadonly';

describe('getPassword.test', () => {
    test('gets correct state value', () => {
        const schema: ProfileSchema = {
            profileInfo: {},
            isLoading: false,
            readonly: true,
        };

        const state: DeepPartial<StateSchema> = {
            profile: schema,
        };

        expect(getReadonly(state as StateSchema)).toEqual(true);
    });
});
