import React, {Suspense} from 'react';
import {Routes} from 'react-router';
import "./index.scss"
import {Link, Route} from "react-router-dom";
import {MainPageAsync} from "./components/mainPage/MainPageAsync";
import {AboutPageAsync} from "./components/aboutPage/AboutPageAsync";

const App = () => {
    return (
        <div className="app">
            <div>s
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