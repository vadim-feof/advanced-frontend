import React, {FC, useMemo, useState} from 'react';
import {IThemeContextValues, Theme, ThemeContext} from "../lib/ThemeContext";
import {getTheme} from "../lib/getTheme";

export const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(getTheme);

    const value = useMemo<IThemeContextValues>(() => ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};
