import { createSelector } from '@reduxjs/toolkit';
import { getAuthState } from '../../../model/selectors/getAuthState/getAuthState';

export const getIsLoading = createSelector(
    getAuthState,
    (auth) => auth?.isLoading,
);
