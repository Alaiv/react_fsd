import { useStore } from 'react-redux';
import { StateSchemaKey, StoreWithManager } from 'app/providers/storeProvider';
import { FC, useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';

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
    const {
        children,
        isRemove,
        reducers,
    } = props;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducerEntry) => {
            store.reducerManager.add(name, reducer);

            return () => {
                if (isRemove) {
                    store.reducerManager.remove(name);
                }
            };
        });
        // eslint-disable-next-line
    }, []);

    return (
        // eslint-disable-next-line
        <>
            {children}
        </>
    );
};
