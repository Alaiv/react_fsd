import { createContext } from 'react';

export enum Theme {
    DARK = 'dark_theme',
    LIGHT = 'light_theme',
    PURPLE = 'purple_theme',
}

export interface ThemeContextProps {
    theme?: Theme,
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
