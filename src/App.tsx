import React, {Suspense, useState} from 'react';
import './styles/index.scss'
import {NavLink, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {useTheme} from "./theme/useTheme";
import {Theme} from "./theme/ThemeContext";

const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <label htmlFor="theme">
                Тема:
                <select onChange={(e) => toggleTheme(e.target.value as Theme)} id="theme" value={theme}>
                    <option value={Theme.DARK}>Темная тема</option>
                    <option value={Theme.LIGHT}>Светлая тема</option>
                </select>
            </label>
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
