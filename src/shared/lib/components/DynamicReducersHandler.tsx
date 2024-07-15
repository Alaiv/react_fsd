import { useStore } from 'react-redux';
import { FC, ReactNode, useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { StateSchemaKey, StoreWithManager } from '@/app/providers/storeProvider';
import { useAppDispatch } from '../hooks/useAppDispatch';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}

export interface DynamicReducersHandlerProps {
    reducers: ReducersList,
    isRemove?: boolean,
    children?: ReactNode,
}

export const DynamicReducersHandler = (props: DynamicReducersHandlerProps) => {
    const store = useStore() as StoreWithManager;
    const dispatch = useAppDispatch();
    const {
        children,
        isRemove,
        reducers,
    } = props;

    useEffect(() => {
        const initedReducers = store.reducerManager.getReducerMap();

        Object.entries(reducers).forEach(([name, reducer]) => {
            if (!(name in initedReducers)) {
                store.reducerManager.add(name as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });

        return () => {
            if (isRemove) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        // eslint-disable-next-line
        <>
            {children}
        </>
    );
};
