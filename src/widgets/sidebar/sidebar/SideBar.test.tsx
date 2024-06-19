import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { SideBar } from 'widgets/sidebar';
import { RenderWithTranslation } from 'shared/lib/tests/renderWithTranslation';

describe('Sidebar', () => {
    test('shows sidebar', () => {
        RenderWithTranslation(<SideBar />);
        expect(screen.getByTestId('side-bar')).toBeInTheDocument();
    });

    test('collapse sidebar', () => {
        RenderWithTranslation(<SideBar />);

        screen.getByTestId('toggle-btn').click();
        expect(screen.getByTestId('side-bar')).toHaveClass('collapsed');

        screen.getByTestId('toggle-btn').click();
        expect(screen.getByTestId('side-bar')).not.toHaveClass('collapsed');
    });
});
