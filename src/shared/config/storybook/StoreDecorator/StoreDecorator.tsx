import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/storeProvider';
import { AuthReducer } from 'features/AuthByUsername';
import { ReducersList } from 'shared/lib/components/DynamicReducersHandler';
import { ProfileSliceReducer } from 'entities/Profile';

const initialReducers: ReducersList = {
    auth: AuthReducer,
    profile: ProfileSliceReducer,
};

export const StoreDecorator = (initialState: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={initialState as StateSchema} extraReducers={{ ...initialReducers }}>
        <StoryComponent />
    </StoreProvider>
);
