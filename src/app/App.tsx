import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames';
import { useTheme } from '@/app/providers/themeProvider';
import { AppRouter } from '@/app/providers/router';
import { Navbar } from '@/widgets/navbar';
import { SideBar } from '@/widgets/sidebar';
import { getInited, UserAction } from '@/entities/User';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const inited = useSelector(getInited);

    useEffect(() => {
        dispatch(UserAction.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="app-container">
                    <SideBar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
