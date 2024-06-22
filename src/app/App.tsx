import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/themeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/navbar';
import { SideBar } from 'widgets/sidebar';
import { useDispatch } from 'react-redux';
import { UserAction } from 'entities/User';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(UserAction.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="app-container">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
