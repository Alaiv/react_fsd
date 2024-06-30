import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/storeProvider';
import { AuthReducer } from 'features/AuthByUsername';
import { ReducersList } from 'shared/lib/components/DynamicReducersHandler';
import { ProfileSliceReducer } from 'entities/Profile';
import { ArticleDetailsReducer } from 'entities/Article';
import { ArticleDetailsCommentSliceReducer } from 'pages/articleDetailsPage';
import { AddNewCommentReducer } from 'features/addNewComment';
import { ArticlePageReducer } from 'pages/articlePage/model/slice/articlePageSlice';

const initialReducers: ReducersList = {
    auth: AuthReducer,
    profile: ProfileSliceReducer,
    articleDetails: ArticleDetailsReducer,
    articleComments: ArticleDetailsCommentSliceReducer,
    addNewComment: AddNewCommentReducer,
    articlePage: ArticlePageReducer,
};

export const StoreDecorator = (initialState: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={initialState as StateSchema} extraReducers={{ ...initialReducers }}>
        <StoryComponent />
    </StoreProvider>
);
