import React, { useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import { RoutePaths } from 'shared/config/routeConfig/RouteConfig';
import { useSelector } from 'react-redux';
import { getUserAuthData, getUserRoles } from 'entities/User';

import { UserRoles } from 'entities/User/model/const/constants';

export interface RequireAuthRouteProps {
    children: JSX.Element;
    roles?: UserRoles[];
}

export const RequireAuthRoute = ({ children, roles }: RequireAuthRouteProps) => {
    const auth = useSelector(getUserAuthData);
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        if (!userRoles) {
            return false;
        }

        return roles.some((role) => userRoles.includes(role));
    }, [roles, userRoles]);

    if (!auth) {
        return <Navigate to={RoutePaths.main} replace />;
    }

    if (!hasRequiredRoles) {
        return <Navigate to={RoutePaths.forbidden} replace />;
    }

    return children;
};
