import React, {Suspense} from 'react';
import './styles/index.scss'
import {NavLink, Route, Routes} from "react-router-dom";
import {useTheme} from "@/app/providers/ThemeProvider";
import {Theme} from "./providers/ThemeProvider/lib/ThemeContext";
import {classNames} from "@/shared/lib/classNames/classNames";
import {MainPage} from "@/pages/MainPage";
import {AboutPage} from "@/pages/AboutPage";

const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
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
                    <Route path={'/'} element={<MainPage />}/>
                    <Route path={'/about'} element={<AboutPage />}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
