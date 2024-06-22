import axios from 'axios';
import { UserAction } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { loginByUsername } from './LoginByUsername';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('LoginByUsername.test', () => {
    test('success auth', async () => {
        const testThunk = new TestAsyncThunk(loginByUsername);

        const userData = {
            username: 'user132',
            id: 1,
        };

        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));

        const result = await testThunk.callAsyncThunk({ username: 'user132', password: 'pass123' });

        expect(testThunk.dispatch).toHaveBeenCalledWith(UserAction.setAuthData(userData));
        expect(testThunk.dispatch).toHaveBeenCalledTimes(3);
        expect(result.meta.requestStatus).toEqual('fulfilled');
        expect(mockedAxios.post).toBeCalled();
        expect(result.payload).toEqual(userData);
    });

    test('FAIL auth', async () => {
        const testThunk = new TestAsyncThunk(loginByUsername);

        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await testThunk.callAsyncThunk({ username: '', password: '' });

        expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toEqual('rejected');
        expect(mockedAxios.post).toBeCalled();
    });
});
