import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/storeProvider';
import LoginForm from '@/features/AuthByUsername/ui/LoginForm/LoginForm';
import { IComment } from '../../types';

export const sendArticleComment = createAsyncThunk<IComment, string | undefined, ThunkConfig<string>>(
    'sendArticleComment',
    async (commentText, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const userData = getState().user.authData;
        const article = getState().articleDetails?.article;

        if (!userData || !commentText || !article) {
            return rejectWithValue('error');
        }

        const newComment = {
            articleId: article.id,
            text: commentText,
            userId: userData.id,
        };

        console.log(newComment);
        try {
            const response = await extra.api.post<IComment>('/comments', newComment);
            const responseData = response.data;
            console.log(response);
            if (!responseData) {
                throw new Error();
            }

            return { ...responseData, user: userData };
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
