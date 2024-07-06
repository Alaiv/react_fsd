import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { StateSchema } from 'app/providers/storeProvider';
import { sendArticleComment } from '../../../model/services/sendArticleComment/sendArticleComment';
import { IComment } from '../../../model/types';

describe('sendArticleComment.test', () => {
    const comment: IComment = {
        id: '1',
        articleId: '1',
        user: {
            id: 1,
            username: 'user1',
        },
        text: 'cool comment',
    };

    const state: DeepPartial<StateSchema> = {
        user: {
            authData: {
                id: 1,
                username: 'user1',
            },
        },
        articleDetails: {
            article: {
                id: '1',
            },
        },
    };

    test('succsess', async () => {
        const testThunk = new TestAsyncThunk(sendArticleComment, () => state as StateSchema);
        testThunk.api.post.mockReturnValue(Promise.resolve({ data: comment }));
        const result = await testThunk.callAsyncThunk('1');

        expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toEqual('fulfilled');
        expect(testThunk.api.post).toBeCalled();
        expect(result.payload).toEqual(comment);
    });

    test('fail - no text', async () => {
        const testThunk = new TestAsyncThunk(sendArticleComment, () => state as StateSchema);
        testThunk.api.post.mockReturnValue(Promise.resolve({ data: comment }));
        const result = await testThunk.callAsyncThunk(undefined);

        expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toEqual('rejected');
        expect(testThunk.api.post).not.toBeCalled();
    });

    test('fail - no auth data', async () => {
        const state: DeepPartial<StateSchema> = {
            user: {},
            articleDetails: {
                article: {
                    id: '1',
                },
            },
        };

        const testThunk = new TestAsyncThunk(sendArticleComment, () => state as StateSchema);
        testThunk.api.post.mockReturnValue(Promise.resolve({ data: comment }));
        const result = await testThunk.callAsyncThunk('text');

        expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toEqual('rejected');
        expect(testThunk.api.post).not.toBeCalled();
    });

    test('fail - no article data', async () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {
                    id: 1,
                    username: 'user1',
                },
            },
            articleDetails: {},
        };

        const testThunk = new TestAsyncThunk(sendArticleComment, () => state as StateSchema);
        testThunk.api.post.mockReturnValue(Promise.resolve({ data: comment }));
        const result = await testThunk.callAsyncThunk('text');

        expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toEqual('rejected');
        expect(testThunk.api.post).not.toBeCalled();
    });

    test('fail - no data returned', async () => {
        const testThunk = new TestAsyncThunk(sendArticleComment, () => state as StateSchema);
        testThunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await testThunk.callAsyncThunk('text');

        expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toEqual('rejected');
        expect(testThunk.api.post).toBeCalled();
    });
});
