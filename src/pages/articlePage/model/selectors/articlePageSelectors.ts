import { StateSchema } from 'app/providers/storeProvider';

import { ArticleSortType, ArticleTypes } from 'entities/Article/model/const/constants';

export const getArticlePageIsLoading = (state: StateSchema) => state.articlePage?.isLoading;
export const getArticlePageError = (state: StateSchema) => state.articlePage?.error;
export const getArticlePageView = (state: StateSchema) => state.articlePage?.view;
export const getArticlePagePage = (state: StateSchema) => state.articlePage?.page || 1;
export const getArticlePageLimit = (state: StateSchema) => state.articlePage?.limit || 9;
export const getArticlePageHasMore = (state: StateSchema) => state.articlePage?.hasMore;
export const getArticlePageInited = (state: StateSchema) => state.articlePage?._inited;
export const getArticlePageSort = (state: StateSchema) => state.articlePage?.sort || ArticleSortType.VIEWS;
export const getArticlePageOrder = (state: StateSchema) => state.articlePage?.order || 'asc';
export const getArticlePageSearch = (state: StateSchema) => state.articlePage?.search || '';
export const getArticlePageType = (state: StateSchema) => state.articlePage?.type || ArticleTypes.ALL;
