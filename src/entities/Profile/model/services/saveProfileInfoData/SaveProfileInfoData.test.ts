import { IProfile, ProfileError, saveProfileInfoData } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { StateSchema } from 'app/providers/storeProvider';

const data: IProfile = {
    username: 'user123',
    age: 12,
    city: 'asda',
    first: 'asdasd',
    lastname: 'asdasd',
    country: Country.England,
    currency: Currency.RUB,
    avatar: 'asdasdas',
};

describe('SaveProfileInfoData.test', () => {
    test('test success', async () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                formData: data,
            },
        };

        const testThunk = new TestAsyncThunk(saveProfileInfoData, () => state as StateSchema);
        testThunk.api.put.mockReturnValue(Promise.resolve({ data }));
        const result = await testThunk.callAsyncThunk();

        expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toEqual('fulfilled');
        expect(testThunk.api.put).toBeCalled();
        expect(result.payload).toEqual(data);
    });

    test('test invalid data', async () => {
        const state: DeepPartial<StateSchema> = {
            profile: {},
        };

        const expectedResultData = [ProfileError.EMPTY_DATA];

        const testThunk = new TestAsyncThunk(saveProfileInfoData, () => state as StateSchema);
        const result = await testThunk.callAsyncThunk();

        expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toEqual('rejected');
        expect(testThunk.api.post).not.toHaveBeenCalled();
        expect(result.payload).toEqual(expectedResultData);
    });

    test('test server error', async () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                formData: data,
            },
        };
        const testThunk = new TestAsyncThunk(saveProfileInfoData, () => state as StateSchema);
        testThunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await testThunk.callAsyncThunk();

        expect(result.meta.requestStatus).toEqual('rejected');
        expect(result.payload).toEqual([ProfileError.SERVER_ERROR]);
    });
});
