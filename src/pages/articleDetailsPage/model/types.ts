import { IUser } from 'entities/User';
import { EntityState } from '@reduxjs/toolkit';

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
