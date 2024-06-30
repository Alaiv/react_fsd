import { Article } from 'entities/Article';
import { EntityState } from '@reduxjs/toolkit';
import { ArticleViewType } from 'entities/Article/model/types/types';

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading: boolean,
    error?: string,
    view: ArticleViewType,
    page: number,
    limit?: number,
    hasMore: boolean,
    _inited?: boolean
}
