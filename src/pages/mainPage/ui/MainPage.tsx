import React from 'react';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/loader/Loader';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Главная')}
        </div>
    );
};

export default MainPage;
