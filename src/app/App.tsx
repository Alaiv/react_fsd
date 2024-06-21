import React, { Suspense, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/themeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/navbar';
import { SideBar } from 'widgets/sidebar';

function App() {
    const { theme } = useTheme();

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
