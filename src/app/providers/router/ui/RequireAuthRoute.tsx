import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePaths } from 'shared/config/routeConfig/RouteConfig';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

export interface RequireAuthRouteProps {
    children: JSX.Element;
}

export const RequireAuthRoute = ({ children }: RequireAuthRouteProps) => {
    const auth = useSelector(getUserAuthData);

    if (!auth) {
        return <Navigate to={RoutePaths.main} replace />;
    }

    return children;
};
