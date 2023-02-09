import {LOCAL_STORAGE_THEME_KEY, Theme} from "../theme/ThemeContext";

export const getTheme = () => {
    const theme = window?.localStorage?.getItem(LOCAL_STORAGE_THEME_KEY) as Theme

    if (Object.values(Theme).includes(theme)) return theme

    const userMedia = window.matchMedia('(prefers-color-scheme: light)')
    if (userMedia.matches) return Theme.LIGHT

    return Theme.DARK
}
