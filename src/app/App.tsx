import './styles/index.scss'
import {NavLink} from "react-router-dom";
import {useTheme} from "@/app/providers/ThemeProvider";
import {Theme} from "@/app/providers/ThemeProvider/lib/ThemeContext";
import {classNames} from "@/shared/lib/classNames/classNames";
import {AppRouter} from "@/app/providers/router";

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
            <div id={'page'}>
                <AppRouter />
            </div>
        </div>
    );
};

export default App;
