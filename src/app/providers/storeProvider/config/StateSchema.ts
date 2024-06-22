import { CounterSchema } from 'entities/Counter/model/types/CounterSchema';
import { UserSchema } from 'entities/User';
import { AuthSchema } from 'features/AuthByUsername/model/type/authSchema';
import { EnhancedStore } from '@reduxjs/toolkit';
import { IReducerManager } from './reducerManager';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    auth?: AuthSchema,
}
export type StateSchemaKey = keyof StateSchema;

export interface StoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: IReducerManager
}
