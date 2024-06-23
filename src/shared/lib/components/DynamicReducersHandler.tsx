import { useStore } from 'react-redux';
import { StateSchemaKey, StoreWithManager } from 'app/providers/storeProvider';
import { FC, useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import LoginForm from 'features/AuthByUsername/ui/LoginForm/LoginForm';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}

type ReducerEntry = [StateSchemaKey, Reducer];

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
        Object.entries(reducers).forEach(([name, reducer]: ReducerEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (isRemove) {
                Object.entries(reducers).forEach(([name]: ReducerEntry) => {
                    store.reducerManager.remove(name);
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
