import { createSelector } from '@reduxjs/toolkit';
import { getAuthState } from 'features/AuthByUsername/model/selectors/getAuthState/getAuthState';

export const getIsLoading = createSelector(
    getAuthState,
    (auth) => auth?.isLoading,
);
