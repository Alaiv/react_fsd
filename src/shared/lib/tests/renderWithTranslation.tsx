import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nTestConfig';
import * as React from 'react';
import { ReactNode } from 'react';
import { render } from '@testing-library/react';

export const RenderWithTranslation = (component: ReactNode) => (
    render(
        <I18nextProvider i18n={i18n}>
            {component}
        </I18nextProvider>,
    )
);
