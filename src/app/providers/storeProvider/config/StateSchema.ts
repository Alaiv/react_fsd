import { UserSchema } from 'entities/User';
import { AuthSchema } from 'features/AuthByUsername/model/type/authSchema';
import { EnhancedStore } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { NavigateFunction } from 'react-router';
import { createStore } from './store';
import { IReducerManager } from './reducerManager';

export interface StateSchema {
    user: UserSchema,
    auth?: AuthSchema,
    profile?: ProfileSchema,
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
