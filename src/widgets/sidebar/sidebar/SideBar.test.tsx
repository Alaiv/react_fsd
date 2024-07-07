import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderForTest } from 'shared/lib/tests/renderForTest';
import { SideBar } from './SideBar';

describe('Sidebar', () => {
    test('shows sidebar', () => {
        renderForTest(<SideBar />);
        expect(screen.getByTestId('side-bar')).toBeInTheDocument();
    });

    test('collapse sidebar', () => {
        renderForTest(<SideBar />);

        screen.getByTestId('toggle-btn').click();
        expect(screen.getByTestId('side-bar')).toHaveClass('collapsed');

        screen.getByTestId('toggle-btn').click();
        expect(screen.getByTestId('side-bar')).not.toHaveClass('collapsed');
    });
});
