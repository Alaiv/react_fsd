import React, { Suspense, useMemo } from 'react';
import { Routes } from 'react-router';
import { Route, RouteProps } from 'react-router-dom';
import { AppRoutes } from 'shared/config/routeConfig/RouteConfig';
import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => AppRoutes.filter((route) => !(route.authOnly && !isAuth)), [isAuth]);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routes.map(({ path, element }: RouteProps) => (
                    <Route
                        path={path}
                        element={(
                            <div className="page-wrapper">
                                {element}
                            </div>
                        )}
                        key={path}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
