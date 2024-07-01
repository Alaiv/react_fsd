import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PageSchema } from '../types/PageSchema';

const initialState: PageSchema = {
    scroll: {},
};

const PageSlice = createSlice({
    name: 'widgets/Page',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{ path: string, position: number }>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: PageSliceActions } = PageSlice;
export const { reducer: PageSliceReducer } = PageSlice;
