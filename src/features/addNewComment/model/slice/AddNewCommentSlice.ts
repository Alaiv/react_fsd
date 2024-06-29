import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddNewCommentSchema } from '../type/AddNewCommentSchema';

const initialState: AddNewCommentSchema = {
    isLoading: false,
    text: '',
};

const AddNewCommentSlice = createSlice({
    name: 'addNewComment',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

export const { actions: AddNewCommentSliceActions } = AddNewCommentSlice;
export const { reducer: AddNewCommentReducer } = AddNewCommentSlice;
