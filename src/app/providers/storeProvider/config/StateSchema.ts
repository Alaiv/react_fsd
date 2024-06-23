import { CounterSchema } from 'entities/Counter/model/types/CounterSchema';
import { UserSchema } from 'entities/User';
import { AuthSchema } from 'features/AuthByUsername/model/type/authSchema';
import { EnhancedStore } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { createStore } from './store';
import { IReducerManager } from './reducerManager';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    auth?: AuthSchema,
    profile?: ProfileSchema,
}
export type StateSchemaKey = keyof StateSchema;

export interface StoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: IReducerManager
}

export type DispatchType = ReturnType<typeof createStore>['dispatch'];
