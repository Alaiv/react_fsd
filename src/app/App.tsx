import React from 'react';
import "./styles/index.scss"
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/themeProvider";
import {AppRouter} from "app/providers/router";


const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <div>
                <button onClick={toggleTheme}>Change theme</button>
                <Link to={"/"}>MainPage</Link>
                <Link to={"/about"}>AboutPage</Link>
            </div>
            <AppRouter/>
        </div>
    );
};

export default App;