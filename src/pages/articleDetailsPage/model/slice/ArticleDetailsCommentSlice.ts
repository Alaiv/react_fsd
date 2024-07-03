import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleCommentSchema, IComment } from 'pages/articleDetailsPage/model/types';
import { StateSchema } from 'app/providers/storeProvider';
import { sendArticleComment } from 'pages/articleDetailsPage/model/services/sendArticleComment/sendArticleComment';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter({
    selectId: (comment: IComment) => comment.id,
});

export const commentsSelectors = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.articleComments || commentsAdapter.getInitialState(),
);

export const ArticleDetailsCommentSlice = createSlice({
    name: 'comment',
    initialState: commentsAdapter.getInitialState<ArticleCommentSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state, _) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Array<IComment>>) => {
                state.error = '';
                state.isLoading = false;

                commentsAdapter.setMany(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.isLoading = false;
                state.error = action.payload;
            });

        builder
            .addCase(sendArticleComment.fulfilled, (state, action: PayloadAction<IComment>) => {
                commentsAdapter.setOne(state, action.payload);
            });
    },
});

export const { actions: CommentSliceActions } = ArticleDetailsCommentSlice;
export const { reducer: ArticleDetailsCommentSliceReducer } = ArticleDetailsCommentSlice;
