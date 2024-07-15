import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/ui/Page';

const AdminPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('Страница админа')}
        </Page>
    );
};

export default AdminPage;
