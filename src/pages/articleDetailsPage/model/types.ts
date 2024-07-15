import { EntityState } from '@reduxjs/toolkit';
import { IUser } from '@/entities/User';
import { Article } from '@/entities/Article';

export interface IComment {
    id: string
    text: string
    articleId: string
    user: IUser
}

export interface ArticleCommentSchema extends EntityState<IComment> {
    isLoading: boolean,
    error?: string,
}

export interface ArticleRecommendationSchema extends EntityState<Article> {
    isLoading: boolean,
    error?: string
}

export interface ArticleDetailsPageSchema {
    articleComments: ArticleCommentSchema,
    articleRecommendations: ArticleRecommendationSchema
}
