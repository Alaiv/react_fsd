import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    theme: Theme,
    toggleTheme: () => void,
}

const chooseTheme = (theme: Theme | undefined) => {
    switch (theme) {
    case Theme.LIGHT:
        return Theme.DARK;
    case Theme.DARK:
        return Theme.PURPLE;
    case Theme.PURPLE:
        return Theme.LIGHT;
    default:
        return Theme.LIGHT;
    }
};

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = chooseTheme(theme);
        setTheme?.(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme: theme || Theme.LIGHT, toggleTheme };
};
