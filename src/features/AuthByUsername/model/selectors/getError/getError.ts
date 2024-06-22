import { createSelector } from '@reduxjs/toolkit';
import { getAuthState } from 'features/AuthByUsername/model/selectors/getAuthState/getAuthState';

export const getError = createSelector(
    getAuthState,
    (auth) => auth?.error,
);
