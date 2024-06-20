import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider/config/StateSchema';
import { CounterReducer } from 'entities/Counter';

export function createStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: CounterReducer,
        },
        preloadedState: initialState,
        devTools: __IS_DEV__,
    });
}
