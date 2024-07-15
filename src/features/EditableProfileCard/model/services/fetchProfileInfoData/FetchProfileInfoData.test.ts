import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { IProfile } from '@/entities/Profile';
import { fetchProfileInfoData } from './FetchProfileInfoData';

describe('FetchProfileInfoData.test', () => {
    test('test success', async () => {
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

        const testThunk = new TestAsyncThunk(fetchProfileInfoData);
        testThunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await testThunk.callAsyncThunk('1');

        expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toEqual('fulfilled');
        expect(testThunk.api.get).toBeCalled();
        expect(result.payload).toEqual(data);
    });

    test('test fail', async () => {
        const testThunk = new TestAsyncThunk(fetchProfileInfoData);
        testThunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await testThunk.callAsyncThunk('1');

        expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toEqual('rejected');
        expect(testThunk.api.get).toBeCalled();
    });
});
