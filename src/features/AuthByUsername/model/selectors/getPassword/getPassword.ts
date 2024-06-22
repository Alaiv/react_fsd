import { createSelector } from '@reduxjs/toolkit';
import { getAuthState } from 'features/AuthByUsername/model/selectors/getAuthState/getAuthState';

export const getPassword = createSelector(
    getAuthState,
    (auth) => auth.password,
);
