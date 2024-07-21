import { rtkApi } from '@/shared/lib/api/rtkApi';
import { Rating } from '@/entities/Rating';

interface GetArticleArgs {
    userId: number;
    articleId: string;
}

interface RateArticleArgs {
    userId: number;
    articleId: string;
    rate: number;
    feedback?: string;
}

export const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<Rating[], GetArticleArgs>({
            query: ({ userId, articleId }) => ({
                url: '/article-ratings',
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
        rateArticle: build.mutation<void, RateArticleArgs>({
            query: (rating) => ({
                url: '/article-ratings',
                method: 'POST',
                body: rating,
            }),
        }),
    }),
});

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
