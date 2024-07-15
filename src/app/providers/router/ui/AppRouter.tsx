import React, { Suspense, useCallback } from 'react';
import { Routes } from 'react-router';
import { Route } from 'react-router-dom';
import { AppRouteProps, AppRoutes } from '@/shared/config/routeConfig/RouteConfig';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuthRoute } from './RequireAuthRoute';

const AppRouter = () => {
    const renderWithWrapper = useCallback(({
        path, element, authOnly, roles,
    }: AppRouteProps) => {
        const elem = (
            <Suspense fallback={<PageLoader />}>
                {element}
            </Suspense>
        );

        return (
            <Route
                path={path}
                element={authOnly ? <RequireAuthRoute roles={roles}>{elem}</RequireAuthRoute> : elem}
                key={path}
            />
        );
    }, []);

    return (
        <Routes>
            {AppRoutes.map(renderWithWrapper)}
        </Routes>
    );
};

export default AppRouter;
