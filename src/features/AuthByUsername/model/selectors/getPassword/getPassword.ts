import { createSelector } from '@reduxjs/toolkit';
import { getAuthState } from '../../../model/selectors/getAuthState/getAuthState';

export const getPassword = createSelector(
    getAuthState,
    (auth) => auth?.password,
);
