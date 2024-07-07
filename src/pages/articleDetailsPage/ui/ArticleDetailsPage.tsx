import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextColor } from 'shared/ui/text/Text';
import { DynamicReducersHandler } from 'shared/lib/components/DynamicReducersHandler';
import { Page } from 'widgets/Page/ui/Page';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { ArticleDetailsRecommendations } from 'features/ArticleDetailsRecommendations';
import {
    ArticleDetailsPageCommentaries,
} from './ArticleDetailsPageCommentaries/ArticleDetailsPageCommentaries';
import { ArticleDetailsPageHeader } from '../ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsPageReducer } from '../model/slice';
import cl from './ArticleDetailsPage.module.scss';

export interface ArticleDetailsPageProps {
    extraClassName?: string;
}

const reducers = {
    articleDetailsPage: ArticleDetailsPageReducer,
};

const ArticleDetailsPage = ({ extraClassName }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();
    const isNotStoryBook = __PROJECT__ !== 'storybook';

    if (!id && isNotStoryBook) {
        return (
            <div className={classNames(cl.ArticleDetailsPage, {}, [extraClassName])}>
                <Text textColor={TextColor.ERROR} text={t('Статья не найдена')} />
            </div>
        );
    }

    return (
        <DynamicReducersHandler reducers={reducers} isRemove>
            <Page extraClassName={classNames(cl.ArticleDetailsPage, {}, [extraClassName])}>
                <VStack gap={16} max>
                    <ArticleDetailsPageHeader id={id} />
                    <ArticleDetails id={id || '1'} />
                    <ArticleDetailsRecommendations />
                    <ArticleDetailsPageCommentaries id={id} />
                </VStack>
            </Page>
        </DynamicReducersHandler>
    );
};

export default memo(ArticleDetailsPage);
