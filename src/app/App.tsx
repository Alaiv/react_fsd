import React from 'react';
import "./styles/index.scss"
import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/themeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/navbar";


const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;