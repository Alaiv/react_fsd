import {
    CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { StateSchema, ThunkExtra } from 'app/providers/storeProvider/config/StateSchema';
import { UserReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/storeProvider/config/reducerManager';
import { $api } from 'shared/lib/api/api';
import { NavigateFunction } from 'react-router';

export function createStore(
    initialState?: StateSchema,
    extraReducers?: ReducersMapObject<StateSchema>,
    navigate?: NavigateFunction,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: UserReducer,
        ...extraReducers,
    };

    const reducerManager = createReducerManager(rootReducer);

    const extraArgs: ThunkExtra = {
        api: $api,
        navigate,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        preloadedState: initialState,
        devTools: __IS_DEV__,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArgs,
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
