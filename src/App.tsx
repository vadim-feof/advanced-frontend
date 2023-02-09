import React, {Suspense} from 'react';
import './index.scss'
import {NavLink, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";

const App = () => {
    return (
        <div className='app'>
            <NavLink to={'/'}>Главная</NavLink>
            <NavLink to={'/about'}>О сайте</NavLink>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />}/>
                    <Route path={'/about'} element={<AboutPageAsync />}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
