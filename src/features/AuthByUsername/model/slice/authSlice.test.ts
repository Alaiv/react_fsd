import { AuthActions, AuthReducer } from '../slice/authSlice';
import { AuthSchema } from '../type/authSchema';

describe('authSlice.test', () => {
    test('change username', () => {
        const newName = 'newUser';

        const state: AuthSchema = {
            username: 'user123',
            password: 'pass123',
            isLoading: true,
            error: 'user123',
        };

        const expectedState: AuthSchema = {
            username: newName,
            password: 'pass123',
            isLoading: true,
            error: 'user123',
        };

        expect(AuthReducer(state, AuthActions.setUsername(newName))).toEqual(expectedState);
    });

    test('change password', () => {
        const newPassword = 'newPassword';

        const state: AuthSchema = {
            username: 'user123',
            password: 'pass123',
            isLoading: true,
            error: 'user123',
        };

        const expectedState: AuthSchema = {
            username: 'user123',
            password: newPassword,
            isLoading: true,
            error: 'user123',
        };

        expect(AuthReducer(state, AuthActions.setPassword(newPassword))).toEqual(expectedState);
    });

    test('change username default', () => {
        const newUsername = 'newPassword';
        const expectedState: AuthSchema = {
            username: newUsername,
            password: '',
            isLoading: false,
        };

        expect(AuthReducer(undefined, AuthActions.setUsername(newUsername))).toEqual(expectedState);
    });

    test('change password default', () => {
        const newPassword = 'newPassword';
        const expectedState: AuthSchema = {
            username: '',
            password: newPassword,
            isLoading: false,
        };

        expect(AuthReducer(undefined, AuthActions.setPassword(newPassword))).toEqual(expectedState);
    });
});
