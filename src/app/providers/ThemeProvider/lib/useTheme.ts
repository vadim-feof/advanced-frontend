import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

interface UseThemeResult {
    toggleTheme: (theme: Theme) => void,
    theme: Theme
}

export const useTheme: () => UseThemeResult = () => {
    const {theme, setTheme, ...context} = useContext(ThemeContext)

    if (!context) throw new Error('Хук useTheme должен быть использован внутри ThemeProvider')

    const toggleTheme = (theme: Theme) => {
        setTheme(theme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
    }

    return {toggleTheme, theme}
}
