import React, { Suspense, useCallback } from 'react';
import { Routes } from 'react-router';
import { AppRouteProps, AppRoutes } from 'shared/config/routeConfig/RouteConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuthRoute } from 'app/providers/router';
import { Route } from 'react-router-dom';

const AppRouter = () => {
    const renderWithWrapper = useCallback(({ path, element, authOnly }: AppRouteProps) => {
        const elem = (
            <Suspense fallback={<PageLoader />}>
                {element}
            </Suspense>
        );

        return (
            <Route
                path={path}
                element={authOnly ? <RequireAuthRoute>{elem}</RequireAuthRoute> : elem}
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
