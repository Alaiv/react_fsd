import '@testing-library/jest-dom';

import * as React from 'react';
import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { renderForTest } from '@/shared/lib/tests/renderForTest';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { UserReducer } from '@/entities/User';
import { $api } from '@/shared/lib/api/api';
import { ProfileSliceReducer } from '../../model/slice/ProfileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile = {
    id: '1',
    first: 'jgh1dasdsa',
    lastname: 'asf',
    age: 32,
    currency: Currency.EUR,
    country: Country.Belarus,
    city: 'Moscow',
    username: 'admin213',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            formData: profile,
            profileInfo: profile,
            isLoading: false,
        },
        user: {
            authData: {
                id: 1,
            },
        },
    },
    extraReducers: {
        profile: ProfileSliceReducer,
        user: UserReducer,
    },
};

describe('EditableProfileCard', () => {
    test('click edit btn, save and cancel btns showed', async () => {
        renderForTest(
            <EditableProfileCard id="1" />,
            options,
        );

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));
        expect(screen.getByTestId('EditableProfileCardHeader.SaveBtn')).toBeInTheDocument();
        expect(screen.getByTestId('EditableProfileCardHeader.CancelBtn')).toBeInTheDocument();
    });

    test('cancel changes, data should not change', async () => {
        renderForTest(
            <EditableProfileCard id="1" />,
            options,
        );

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));
        await userEvent.clear(screen.getByTestId('Profile.Name'));
        await userEvent.type(screen.getByTestId('Profile.Name'), 'alalalala');

        expect(screen.getByTestId('Profile.Name')).toHaveValue('alalalala');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelBtn'));

        expect(screen.getByTestId('Profile.Name')).toHaveValue(profile.first);
    });

    test('empty username shows error', async () => {
        renderForTest(
            <EditableProfileCard id="1" />,
            options,
        );

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));
        await userEvent.clear(screen.getByTestId('Profile.Name'));

        expect(screen.getByTestId('Profile.Name')).toHaveValue('');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'));

        expect(screen.getByTestId('EditableProfileCard.Error.Text')).toBeInTheDocument();
    });

    test('save changes, data should change', async () => {
        renderForTest(
            <EditableProfileCard id="1" />,
            options,
        );

        const watchedRequest = jest.spyOn($api, 'put');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));
        await userEvent.type(screen.getByTestId('Profile.Name'), 'user123');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'));

        expect(watchedRequest).toHaveBeenCalled();
    });
});
