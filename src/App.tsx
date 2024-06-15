import React, {Suspense} from 'react';
import {Routes} from 'react-router';
import "./styles/index.scss"
import {Link, Route} from "react-router-dom";
import {MainPageAsync} from "./pages/mainPage/MainPageAsync";
import {AboutPageAsync} from "./pages/aboutPage/AboutPageAsync";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <div>
                <button onClick={toggleTheme}>Change theme</button>
                <Link to={"/"}>MainPage</Link>
                <Link to={"/about"}>AboutPage</Link>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;