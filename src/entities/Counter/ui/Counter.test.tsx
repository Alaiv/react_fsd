import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { StateSchema } from 'app/providers/storeProvider';
import { RenderForTest } from 'shared/lib/tests/renderForTest';
import * as React from 'react';
import { DeepPartial } from '@reduxjs/toolkit';
import { Counter } from './Counter';

describe('Counter.test', () => {
    test('all elements are showed', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 5 },
        };

        RenderForTest(<Counter />, { initialState: state });

        expect(screen.getByTestId('counter-val')).toHaveTextContent('5');
        expect(screen.getByTestId('inc')).toBeInTheDocument();
        expect(screen.getByTestId('dec')).toBeInTheDocument();
    });

    test('increment', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 5 },
        };

        RenderForTest(<Counter />, { initialState: state });

        userEvent.click(screen.getByTestId('inc'));
        expect(screen.getByTestId('counter-val')).toHaveTextContent('6');
    });

    test('decrement', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 5 },
        };

        RenderForTest(<Counter />, { initialState: state });

        userEvent.click(screen.getByTestId('dec'));
        expect(screen.getByTestId('counter-val')).toHaveTextContent('4');
    });
});
