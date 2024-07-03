import { UserSchema } from 'entities/User';
import { AuthSchema } from 'features/AuthByUsername/model/type/authSchema';
import { EnhancedStore } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { NavigateFunction } from 'react-router';
import { ArticleDetailsSchema } from 'entities/Article';
import { ArticleDetailsPageSchema } from 'pages/articleDetailsPage';
import { AddNewCommentSchema } from 'features/addNewComment';
import { ArticlePageSchema } from 'pages/articlePage/model/types/articlePageSchema';
import { PageSchema } from 'widgets/Page';
import { createStore } from './store';
import { IReducerManager } from './reducerManager';

export interface StateSchema {
    user: UserSchema,
    page: PageSchema,
    auth?: AuthSchema,
    profile?: ProfileSchema,
    articleDetails?: ArticleDetailsSchema,
    addNewComment?: AddNewCommentSchema,
    articlePage?: ArticlePageSchema,
    articleDetailsPage?: ArticleDetailsPageSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface StoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: IReducerManager
}

export type DispatchType = ReturnType<typeof createStore>['dispatch'];

export interface ThunkExtra {
    api: AxiosInstance;
    navigate?: NavigateFunction;
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtra,
    state: StateSchema,
}
