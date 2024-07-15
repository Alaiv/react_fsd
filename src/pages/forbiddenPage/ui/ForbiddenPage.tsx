import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/ui/Page';

const ForbiddenPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('У вас нет доступа')}
        </Page>
    );
};

export default ForbiddenPage;
