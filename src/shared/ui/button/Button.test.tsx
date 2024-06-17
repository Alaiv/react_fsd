import '@testing-library/jest-dom';

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Button, ButtonType } from 'shared/ui/button/Button';

describe('Button', () => {
    test('shows button', () => {
        const testMessage = 'Test Message';
        render(<Button>{testMessage}</Button>);
        expect(screen.getByText(testMessage)).toBeInTheDocument();
    });

    test('shows button with class', () => {
        const testMessage = 'Test Message';
        render(
            <Button btnType={ButtonType.CLEAR}>
                {testMessage}
            </Button>,
        );
        expect(screen.getByText(testMessage)).toBeInTheDocument();
        expect(screen.getByText(testMessage)).toHaveClass('clear');
    });
});
