import { Article } from 'entities/Article';
import { EntityState } from '@reduxjs/toolkit';
import { SortOrder } from 'shared/lib/types/sortOrderTypes';
import { ArticleSortType, ArticleTypes, ArticleViewType } from 'entities/Article/model/const/constants';

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
