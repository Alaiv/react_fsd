import { Theme, ThemeProvider } from 'app/providers/themeProvider';
import { Story } from '@storybook/react';
import { useEffect } from 'react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
    document.body.className = theme;

    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
};
