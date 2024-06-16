import React, {Suspense} from 'react';
import {Routes} from "react-router";
import {Route, RouteProps} from "react-router-dom";
import {AppRoutes} from "shared/config/routeConfig/RouteConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {AppRoutes.map(({path, element}: RouteProps) => (
                    <Route path={path} element={(
                        <div className="page-wrapper">
                            element
                        </div>
                    )} key={path}/>
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;