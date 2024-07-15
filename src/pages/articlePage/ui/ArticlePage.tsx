import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames';
import { DynamicReducersHandler } from '@/shared/lib/components/DynamicReducersHandler';
import { useConditionalEffect } from '@/shared/lib/hooks/useConditionalEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Text, TextColor } from '@/shared/ui/text/Text';
import { Page } from '@/widgets/Page/ui/Page';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { ArticlePageList } from '../ui/ArticlePageList/ArticlePageList';
import { initArticlePageState } from '../model/services/initArticlePageState/initArticlePageState';
import { ArticlePageFilters } from '../ui/ArticlePageFilters/ArticlePageFilters';
import { fetchNextArticles } from '../model/services/fetchNextArticles/fetchNextArticles';
import { ArticlePageReducer } from '../model/slice/articlePageSlice';
import { getArticlePageError } from '../model/selectors/articlePageSelectors';
import cl from './ArticlePage.module.scss';

export interface ArticlePageProps {
    extraClassName?: string;
}

const reducers = {
    articlePage: ArticlePageReducer,
};

const ArticlePage = ({ extraClassName }: ArticlePageProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const error = useSelector(getArticlePageError);

    const [searchParams] = useSearchParams();

    useConditionalEffect(() => {
        dispatch(initArticlePageState(searchParams));
    });

    const infiniteScrollHandler = useCallback(() => {
        dispatch(fetchNextArticles());
    }, [dispatch]);

    if (error) {
        return (
            <Page
                scrollIntersectionHandler={infiniteScrollHandler}
                extraClassName={classNames(cl.ArticleDetailsPage, {}, [extraClassName])}
            >
                <Text
                    textColor={TextColor.ERROR}
                    title={t('Произошла ошибка при загрузке статей')}
                    text={t('Попробуйте обновить страницу.')}
                />
            </Page>
        );
    }

    return (
        <DynamicReducersHandler reducers={reducers} isRemove={false}>
            <Page
                scrollIntersectionHandler={infiniteScrollHandler}
                extraClassName={classNames(cl.ArticlePage, {}, [extraClassName])}
            >
                <VStack gap={32} max>
                    <ArticlePageFilters />
                    <ArticlePageList />
                </VStack>
            </Page>
        </DynamicReducersHandler>
    );
};

export default memo(ArticlePage);
