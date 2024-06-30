import { useStore } from 'react-redux';
import { StateSchemaKey, StoreWithManager } from 'app/providers/storeProvider';
import { FC, useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}

export interface DynamicReducersHandlerProps {
    reducers: ReducersList,
    isRemove?: boolean
}

export const DynamicReducersHandler: FC<DynamicReducersHandlerProps> = (props) => {
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
