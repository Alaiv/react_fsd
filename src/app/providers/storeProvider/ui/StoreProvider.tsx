import React from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { StateSchema } from '../config/StateSchema';
import { createStore } from '../config/store';

interface StoreProviderProps {
    children: React.ReactNode;
    initialState?: StateSchema;
    extraReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
        extraReducers,
    } = props;

    const store = createStore(initialState, extraReducers as ReducersMapObject<StateSchema>);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
