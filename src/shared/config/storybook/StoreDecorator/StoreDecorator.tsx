import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/storeProvider';
import { AuthReducer } from '@/features/AuthByUsername';
import { ReducersList } from '@/shared/lib/components/DynamicReducersHandler';
import { ArticleDetailsReducer } from '@/entities/Article';
import { AddNewCommentReducer } from '@/features/addNewComment';
import { ArticlePageReducer } from '@/pages/articlePage/model/slice/articlePageSlice';
import { ArticleDetailsPageReducer } from '@/pages/articleDetailsPage/model/slice';
import { ProfileSliceReducer } from '@/features/EditableProfileCard/model/slice/ProfileSlice';

const initialReducers: ReducersList = {
    auth: AuthReducer,
    profile: ProfileSliceReducer,
    articleDetails: ArticleDetailsReducer,
    articleDetailsPage: ArticleDetailsPageReducer,
    addNewComment: AddNewCommentReducer,
    articlePage: ArticlePageReducer,
};

export const StoreDecorator = (initialState: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={initialState as StateSchema} extraReducers={{ ...initialReducers }}>
        <StoryComponent />
    </StoreProvider>
);
