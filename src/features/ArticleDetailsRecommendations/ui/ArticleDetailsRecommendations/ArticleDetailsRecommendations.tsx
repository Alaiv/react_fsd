import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextSize } from '@/shared/ui/text/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { classNames } from '@/shared/lib/classNames';
import { useGetArticlesRecommendations } from '../../api/recommendationApi';

interface ArticleDetailsRecommendationsProps {
    extraClassName?: string;
}

export const ArticleDetailsRecommendations = memo((props: ArticleDetailsRecommendationsProps) => {
    const { extraClassName } = props;
    const { t } = useTranslation();
    const { isLoading, isError, data: articles } = useGetArticlesRecommendations(3);

    if (isLoading || isError) {
        return null;
    }
    console.log(articles);

    return (
        <VStack gap={8} className={classNames('', {}, [extraClassName])}>
            <Text title={t('Рекоммендации')} size={TextSize.L} />
            <ArticleList
                virualized={false}
                articles={articles}
                target="_blank"
            />
        </VStack>
    );
});
