import { rtkApi } from '@/shared/lib/api/rtkApi';

export const recommendationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticlesRecommendations: build.query({
            query: (limit: number) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

export const useGetArticlesRecommendations = recommendationApi
    .useGetArticlesRecommendationsQuery;
