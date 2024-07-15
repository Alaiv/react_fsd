import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { getArticleDetailsData } from '@/entities/Article';

export const getCanEditaArticle = createSelector(
    getUserAuthData,
    getArticleDetailsData,
    (authData, article) => {
        if (!authData || !article) {
            return false;
        }

        return authData.id === article.user.id;
    },
);
