import React from 'react';
import { Theme, useTheme } from 'app/providers/themeProvider';
import { Button, ButtonType } from 'shared/ui/button/Button';
import DarkTheme from 'shared/assets/icons/DarkTheme.svg';
import LightTheme from 'shared/assets/icons/LightTheme.svg';
import { classNames } from 'shared/lib/classNames';
import cl from './ThemeSwitcher.module.scss';

export interface ThemeSwitcherProps {
    extraClassName?: string;
}

export const ThemeSwitcher = ({ extraClassName }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames(cl.ThemeSwitcher, {}, [extraClassName])}>
            <Button
                btnType={ButtonType.CLEAR}
                onClick={toggleTheme}
            >
                {theme === Theme.DARK ? <DarkTheme /> : <LightTheme />}
            </Button>
        </div>
    );
};
