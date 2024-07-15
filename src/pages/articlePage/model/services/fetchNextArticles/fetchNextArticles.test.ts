import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { StateSchema } from '@/app/providers/storeProvider';
import { fetchNextArticles } from '../../../model/services/fetchNextArticles/fetchNextArticles';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticles.test', () => {
    test('succsess', async () => {
        const state: DeepPartial<StateSchema> = {
            articlePage: {
                isLoading: false,
                page: 2,
                limit: 4,
                hasMore: true,
                entities: {},
                ids: [],
            },
        };

        const testThunk = new TestAsyncThunk(fetchNextArticles, () => state as StateSchema);

        const result = await testThunk.callAsyncThunk();

        expect(testThunk.dispatch).toHaveBeenCalledTimes(4);
        expect(result.meta.requestStatus).toEqual('fulfilled');
        expect(fetchArticlesList).toBeCalledWith({ page: 3 });
    });

    test('hasMore = false', async () => {
        const state: DeepPartial<StateSchema> = {
            articlePage: {
                isLoading: false,
                page: 2,
                limit: 4,
                hasMore: false,
                entities: {},
                ids: [],
            },
        };

        const testThunk = new TestAsyncThunk(fetchNextArticles, () => state as StateSchema);

        await testThunk.callAsyncThunk();

        expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });

    test('isLoading = true', async () => {
        const state: DeepPartial<StateSchema> = {
            articlePage: {
                isLoading: true,
                page: 2,
                limit: 4,
                hasMore: false,
                entities: {},
                ids: [],
            },
        };

        const testThunk = new TestAsyncThunk(fetchNextArticles, () => state as StateSchema);

        await testThunk.callAsyncThunk();

        expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
