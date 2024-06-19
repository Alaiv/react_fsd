import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { SideBar } from 'widgets/sidebar';
import { RenderForTest } from 'shared/lib/tests/renderForTest';

describe('Sidebar', () => {
    test('shows sidebar', () => {
        RenderForTest(<SideBar />);
        expect(screen.getByTestId('side-bar')).toBeInTheDocument();
    });

    test('collapse sidebar', () => {
        RenderForTest(<SideBar />);

        screen.getByTestId('toggle-btn').click();
        expect(screen.getByTestId('side-bar')).toHaveClass('collapsed');

        screen.getByTestId('toggle-btn').click();
        expect(screen.getByTestId('side-bar')).not.toHaveClass('collapsed');
    });
});
