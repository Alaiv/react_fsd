import { Article } from './types';

export interface ArticleDetailsSchema {
    isLoading: boolean,
    error?: string,
    article?: Article
}
