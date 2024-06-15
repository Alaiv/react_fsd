import React, {Suspense} from 'react';
import {Routes} from 'react-router';
import "./styles/index.scss"
import {Link, Route} from "react-router-dom";
import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers";
import {MainPage} from "pages/mainPage";
import {AboutPage} from "pages/aboutPage";


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
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;