import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { fetchNextArticles } from 'pages/articlePage/model/services/fetchNextArticles/fetchNextArticles';
import { StateSchema } from 'app/providers/storeProvider';
import { initArticlePageState } from 'pages/articlePage/model/services/initArticlePageState/initArticlePageState';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticles.test', () => {
    test('succsess', async () => {
        const state: DeepPartial<StateSchema> = {
            articlePage: {
                _inited: false,
            },
        };

        const testThunk = new TestAsyncThunk(initArticlePageState, () => state as StateSchema);

        const result = await testThunk.callAsyncThunk(undefined);

        expect(testThunk.dispatch).toHaveBeenCalledTimes(4);
        expect(result.meta.requestStatus).toEqual('fulfilled');
        expect(fetchArticlesList).toBeCalledWith({ page: 1 });
    });

    test('hasMore = false', async () => {
        const state: DeepPartial<StateSchema> = {
            articlePage: {
                _inited: true,
            },
        };

        const testThunk = new TestAsyncThunk(fetchNextArticles, () => state as StateSchema);

        await testThunk.callAsyncThunk();

        expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
