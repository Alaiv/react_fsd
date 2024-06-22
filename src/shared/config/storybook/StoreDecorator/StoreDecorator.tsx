import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/storeProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { AuthReducer } from 'features/AuthByUsername';

const initialReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    auth: AuthReducer,
};

export const StoreDecorator = (initialState: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={initialState as StateSchema} extraReducers={{ ...initialReducers }}>
        <StoryComponent />
    </StoreProvider>
);
