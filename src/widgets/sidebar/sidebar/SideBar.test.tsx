import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { RenderForTest } from 'shared/lib/tests/renderForTest';
import { SideBar } from './sidebar';

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
