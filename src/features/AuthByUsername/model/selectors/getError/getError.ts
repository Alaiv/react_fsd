import { createSelector } from '@reduxjs/toolkit';
import { getAuthState } from '../../../model/selectors/getAuthState/getAuthState';

export const getError = createSelector(
    getAuthState,
    (auth) => auth?.error,
);
