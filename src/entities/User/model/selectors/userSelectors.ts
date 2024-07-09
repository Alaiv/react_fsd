import { StateSchema } from 'app/providers/storeProvider';
import { createSelector } from '@reduxjs/toolkit';

import { UserRoles } from '../const/constants';

export const getUserRoles = (state: StateSchema) => state.user.authData?.role;

export const isAdmin = createSelector(
    getUserRoles,
    (role) => role && role.includes(UserRoles.ADMIN),
);

export const isManager = createSelector(
    getUserRoles,
    (role) => role && role.includes(UserRoles.MANAGER),
);
