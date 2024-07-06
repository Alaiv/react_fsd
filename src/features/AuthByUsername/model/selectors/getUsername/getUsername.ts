import { createSelector } from '@reduxjs/toolkit';
import { getAuthState } from '../../../model/selectors/getAuthState/getAuthState';

export const getUsername = createSelector(
    getAuthState,
    (auth) => auth?.username,
);
