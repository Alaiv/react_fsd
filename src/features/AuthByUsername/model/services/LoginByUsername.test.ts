import { UserAction } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { loginByUsername } from './LoginByUsername';

describe('LoginByUsername.test', () => {
    test('success auth', async () => {
        const testThunk = new TestAsyncThunk(loginByUsername);

        const userData = {
            username: 'user132',
            id: 1,
        };

        testThunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));

        const result = await testThunk.callAsyncThunk({ username: 'user132', password: 'pass123' });

        expect(testThunk.dispatch).toHaveBeenCalledWith(UserAction.setAuthData(userData));
        expect(testThunk.dispatch).toHaveBeenCalledTimes(3);
        expect(result.meta.requestStatus).toEqual('fulfilled');
        expect(testThunk.api.post).toBeCalled();
        expect(result.payload).toEqual(userData);
    });

    test('FAIL auth', async () => {
        const testThunk = new TestAsyncThunk(loginByUsername);

        testThunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await testThunk.callAsyncThunk({ username: '', password: '' });
        console.log(result);
        expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toEqual('rejected');
        expect(result.payload).toBe('error');
        expect(testThunk.api.post).toBeCalled();
    });
});
