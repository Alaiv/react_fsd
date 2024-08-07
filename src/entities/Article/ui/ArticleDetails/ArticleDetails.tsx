import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames';
import { DynamicReducersHandler, ReducersList } from '@/shared/lib/components/DynamicReducersHandler';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Text, TextColor, TextSize } from '@/shared/ui/text/Text';
import { Skeleton } from '@/shared/ui/skeleton/Skeleton';
import { Avatar } from '@/shared/ui/avatar/Avatar';
import DateIcon from '@/shared/assets/icons/dateIcon.svg';
import ViewIcon from '@/shared/assets/icons/viewed.svg';
import { Icon } from '@/shared/ui/icon/Icon';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { BlockType } from '../../model/const/constants';
import { fetchArticlesData } from '../../model/services/fetchArticlesData';
import { getArticleDetailsData, getError, getIsLoading } from '../../model/selectors/articleSelectors';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';
import cl from './ArticleDetails.module.scss';
import { ArticleDetailsReducer } from '../../model/slice/ArticleDetailsSlice';
import { ArticleBlock } from '../../model/types/types';

export interface ArticleDetailsProps {
    extraClassName?: string;
    id: string
}

const baseReducers: ReducersList = {
    articleDetails: ArticleDetailsReducer,
};

export const ArticleDetails = memo(({ extraClassName, id }: ArticleDetailsProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const error = useSelector(getError);
    const isLoading = useSelector(getIsLoading);
    const articleData = useSelector(getArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case BlockType.CODE:
            return <ArticleCodeBlock extraClassName={cl.block} key={block.id} code={block.code} />;
        case BlockType.TEXT:
            return (
                <ArticleTextBlock
                    extraClassName={cl.block}
                    key={block.id}
                    title={block.title}
                    paragraphs={block.paragraphs}
                />
            );
        case BlockType.IMAGE:
            return (
                <ArticleImageBlock
                    extraClassName={cl.block}
                    key={block.id}
                    title={block.title}
                    src={block.src}
                />
            );
        default:
            return null;
        }
    }, []);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticlesData(id));
        }
    }, [dispatch, id]);

    let content;

    if (error) {
        content = (
            <Text
                textColor={TextColor.ERROR}
                title={t('Ошибка при загрузке статьи')}
            />
        );
    } else if (isLoading) {
        content = (
            <VStack gap={16} max>
                <Skeleton extraClassName={cl.avatar} borderRadius="50%" height={200} width={200} />
                <Skeleton extraClassName={cl.title} height={31} width={669} />
                <Skeleton extraClassName={cl.skeleton} height={31} width={399} />
                <Skeleton extraClassName={cl.skeleton} height={231} width={1090} />
                <Skeleton extraClassName={cl.skeleton} height={231} width={1090} />
            </VStack>
        );
    } else {
        content = (
            <VStack max gap={16}>
                <HStack max extraClassName={cl.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={articleData?.img}
                        alt="article_image"
                        extraClassName={cl.avatar}
                    />
                </HStack>
                <VStack gap={4}>
                    <Text
                        title={articleData?.title}
                        text={articleData?.subtitle}
                        extraClassName={cl.title}
                        size={TextSize.XL}
                    />
                    <HStack gap={4} extraClassName={cl.articleInfo}>
                        <Icon Svg={DateIcon} />
                        <Text text={articleData?.createdAt} />
                    </HStack>
                    <HStack gap={4} extraClassName={cl.articleInfo}>
                        <Icon Svg={ViewIcon} />
                        <Text text={articleData?.views.toString()} />
                    </HStack>
                </VStack>
                {articleData?.blocks.map(renderBlock)}
            </VStack>
        );
    }

    return (
        <DynamicReducersHandler reducers={baseReducers} isRemove>
            <VStack gap={16} max extraClassName={classNames(cl.ArticleDetails, {}, [extraClassName])}>
                {content}
            </VStack>
        </DynamicReducersHandler>
    );
});
