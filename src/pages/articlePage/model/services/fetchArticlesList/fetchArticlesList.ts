import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Article } from 'entities/Article';
import {
    getArticlePageLimit,
    getArticlePageOrder,
    getArticlePagePage,
    getArticlePageSearch,
    getArticlePageSort,
    getArticlePageType,
} from 'pages/articlePage/model/selectors/articlePageSelectors';
import { setSearchParams } from 'shared/lib/url/addQueryParam/addQueryParams';
import { ArticleTypes } from 'entities/Article/model/types/types';

export interface FetchArticlesListProps {
    page?: number,
    replace?: boolean
}

export interface FetchArticlesListResult {
    articles: Article[];
    totalCount: string;
}

export const fetchArticlesList = createAsyncThunk<FetchArticlesListResult, FetchArticlesListProps, ThunkConfig<string>>(
    'articlePage/fetchArticlesList',
    async (props, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;
        const page = props.page || getArticlePagePage(getState());
        const limit = getArticlePageLimit(getState());
        const order = getArticlePageOrder(getState());
        const sort = getArticlePageSort(getState());
        const search = getArticlePageSearch(getState());
        const type = getArticlePageType(getState());

        try {
            setSearchParams({
                order,
                sort,
                search,
                type,
            });

            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type: type === ArticleTypes.ALL ? undefined : type,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            const result: FetchArticlesListResult = {
                articles: response.data,
                totalCount: response.headers['x-total-count'] || '0',
            };

            return result;
        } catch (error) {
            return rejectWithValue(i18n.t('error fetching articles data'));
        }
    },
);
