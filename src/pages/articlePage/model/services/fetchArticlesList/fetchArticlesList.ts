import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Article } from 'entities/Article';
import { getArticlePageLimit } from 'pages/articlePage/model/selectors/articlePageSelectors';

export interface FetchArticlesListProps {
    page?: number
}

export interface FetchArticlesListResult {
    articles: Article[];
    totalCount: string;
}

export const fetchArticlesList = createAsyncThunk<FetchArticlesListResult, FetchArticlesListProps, ThunkConfig<string>>(
    'articlePage/fetchArticlesList',
    async (props, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;
        const { page = 1 } = props;
        const limit = getArticlePageLimit(getState());

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            const result: FetchArticlesListResult = {
                articles: response.data,
                totalCount: response.headers['x-total-count'] || '0',
            };

            console.log(result);
            return result;
        } catch (error) {
            return rejectWithValue(i18n.t('error fetching articles data'));
        }
    },
);
