import { Article } from 'entities/Article';
import { EntityState } from '@reduxjs/toolkit';
import { ArticleSortType, ArticleTypes, ArticleViewType } from 'entities/Article/model/types/types';
import { SortOrder } from 'shared/lib/types/sortOrderTypes';

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading: boolean,
    error?: string,

    page: number,
    limit?: number,
    hasMore: boolean,

    view: ArticleViewType,
    order: SortOrder,
    sort: ArticleSortType,
    search: string,
    type: ArticleTypes,
    _inited?: boolean
}
