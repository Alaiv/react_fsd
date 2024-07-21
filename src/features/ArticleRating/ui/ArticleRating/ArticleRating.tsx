import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '@/features/ArticleRating/api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/skeleton/Skeleton';

export interface ArticleRatingProps {
    extraClassName?: string;
    articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { extraClassName, articleId } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? 0,
    });

    const [rateArticle] = useRateArticle();

    const onArticleRate = useCallback((rate: number, feedback?: string) => {
        rateArticle({
            userId: userData?.id ?? 0,
            articleId,
            rate,
            feedback,
        });
    }, [articleId, rateArticle, userData?.id]);

    const onAccept = useCallback((rate: number, feedback?: string) => {
        onArticleRate(rate, feedback);
    }, [onArticleRate]);

    const onCancel = useCallback((rate: number) => {
        onArticleRate(rate);
    }, [onArticleRate]);

    if (isLoading) {
        return <Skeleton width="100%" height={100} />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            extraClassName={extraClassName}
            title={t('Оцените статью')}
            feedBackTitle={t('Пожалуйста оставьте отзыв о статье')}
            hasFeedback
            rate={rating?.rate}
            onAccept={onAccept}
            onCancel={onCancel}
        />
    );
});

export default ArticleRating;
