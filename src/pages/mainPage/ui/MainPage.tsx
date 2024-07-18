import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/ui/Page';
import { StarsRating } from '@/shared/ui/StarsRating/StarsRating';
import { RatingCard } from '@/entities/Rating/ui/RatingCard';

const MainPage = () => {
    const { t } = useTranslation('main');
    const test = useCallback((count: number, text: string) => {
        console.log(count, text);
    }, []);

    return (
        <Page>
            {t('Главная')}
            <RatingCard title="Отзыв" feedBackTitle="Введите отзыв" onAccept={test} />
        </Page>
    );
};

export default MainPage;
