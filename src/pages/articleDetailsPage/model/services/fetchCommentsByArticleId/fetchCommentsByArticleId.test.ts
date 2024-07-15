import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { fetchCommentsByArticleId } from '../../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { IComment } from '../../../model/types';

describe('fetchCommentsByArticleId.test', () => {
    test('succsess', async () => {
        const comments = [
            {
                id: '1',
                articleId: '1',
                user: {
                    id: 1,
                    username: 'user1',
                },
                text: 'cool comment',
            },
            {
                id: '2',
                articleId: '1',
                user: {
                    id: 1,
                    username: 'user1',
                },
                text: 'some random text',
            },
        ];

        const testThunk = new TestAsyncThunk(fetchCommentsByArticleId);
        testThunk.api.get.mockReturnValue(Promise.resolve({ data: comments }));

        const result = await testThunk.callAsyncThunk('1');

        expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toEqual('fulfilled');
        expect(testThunk.api.get).toBeCalled();
        expect(result.payload).toEqual(comments);
    });

    test('no article id', async () => {
        const comments: IComment[] = [
            {
                id: '1',
                articleId: '1',
                user: {
                    id: 1,
                    username: 'user1',
                },
                text: 'cool comment',
            },
            {
                id: '2',
                articleId: '1',
                user: {
                    id: 1,
                    username: 'user1',
                },
                text: 'some random text',
            },
        ];

        const testThunk = new TestAsyncThunk(fetchCommentsByArticleId);
        testThunk.api.get.mockReturnValue(Promise.resolve({ data: comments }));

        const result = await testThunk.callAsyncThunk(undefined);

        expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toEqual('rejected');
        expect(testThunk.api.get).not.toBeCalled();
    });

    test('no data returned', async () => {
        const testThunk = new TestAsyncThunk(fetchCommentsByArticleId);

        testThunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await testThunk.callAsyncThunk('1');

        expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toEqual('rejected');
        expect(testThunk.api.get).toBeCalled();
    });
});
