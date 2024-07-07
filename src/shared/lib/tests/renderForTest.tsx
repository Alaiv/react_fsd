import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nTestConfig';
import * as React from 'react';
import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/storeProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';

interface RenderForTestProps {
    path?: string;
    initialState?: DeepPartial<StateSchema>;
    extraReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const renderForTest = (component: ReactNode, props: RenderForTestProps = {}) => {
    const { path = '/', initialState, extraReducers } = props;

    render(
        <MemoryRouter initialEntries={[path]}>
            <StoreProvider extraReducers={extraReducers} initialState={initialState as StateSchema}>
                <I18nextProvider i18n={i18n}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    );
};
