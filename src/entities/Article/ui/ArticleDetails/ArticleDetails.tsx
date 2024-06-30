import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicReducersHandler, ReducersList } from 'shared/lib/components/DynamicReducersHandler';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { memo, useCallback, useEffect } from 'react';
import { fetchArticlesData } from 'entities/Article/model/services/fetchArticlesData';
import { useSelector } from 'react-redux';
import { getArticle, getError, getIsLoading } from 'entities/Article';
import { Text, TextColor, TextSize } from 'shared/ui/text/Text';
import { Skeleton } from 'shared/ui/skeleton/Skeleton';
import { Avatar } from 'shared/ui/avatar/Avatar';
import DateIcon from 'shared/assets/icons/dateIcon.svg';
import ViewIcon from 'shared/assets/icons/viewed.svg';
import { Icon } from 'shared/ui/icon/Icon';
import { ArticleCodeBlock } from 'entities/Article/ui/ArticleCodeBlock/ArticleCodeBlock';
import { ArticleTextBlock } from 'entities/Article/ui/ArticleTextBlock/ArticleTextBlock';
import { ArticleImageBlock } from 'entities/Article/ui/ArticleImageBlock/ArticleImageBlock';
import { Button, ButtonType } from 'shared/ui/button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePaths } from 'shared/config/routeConfig/RouteConfig';
import cl from './ArticleDetails.module.scss';
import { ArticleDetailsReducer } from '../../model/slice/ArticleDetailsSlice';
import { ArticleBlock, BlockType } from '../../model/types/types';

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
    const articleData = useSelector(getArticle);
    const navigate = useNavigate();

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
            return <ArticleImageBlock extraClassName={cl.block} key={block.id} title={block.title} src={block.src} />;
        default:
            return null;
        }
    }, []);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticlesData(id));
        }
    }, [dispatch, id]);

    const returnToArticlesHandler = useCallback(() => {
        navigate(RoutePaths.article);
    }, [navigate]);

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
            <div>
                <Skeleton extraClassName={cl.avatar} borderRadius="50%" height={200} width={200} />
                <Skeleton extraClassName={cl.title} height={31} width={669} />
                <Skeleton extraClassName={cl.skeleton} height={31} width={399} />
                <Skeleton extraClassName={cl.skeleton} height={231} width={1090} />
                <Skeleton extraClassName={cl.skeleton} height={231} width={1090} />
            </div>
        );
    } else {
        content = (
            <>
                <Button btnType={ButtonType.OUTLINE} onClick={returnToArticlesHandler}>
                    {t('Вернутся к списку постов')}
                </Button>
                <div className={cl.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={articleData?.img}
                        alt="article_image"
                        extraClassName={cl.avatar}
                    />
                </div>
                <Text
                    title={articleData?.title}
                    text={articleData?.subtitle}
                    extraClassName={cl.title}
                    size={TextSize.XL}
                />
                <div className={cl.articleInfo}>
                    <Icon Svg={DateIcon} />
                    <Text text={articleData?.createdAt} />
                </div>
                <div className={cl.articleInfo}>
                    <Icon Svg={ViewIcon} />
                    <Text text={articleData?.views.toString()} />
                </div>

                <div className={cl.blocks}>
                    {articleData?.blocks.map(renderBlock)}
                </div>
            </>
        );
    }

    return (
        <DynamicReducersHandler reducers={baseReducers} isRemove>
            <div className={classNames(cl.ArticleDetails, {}, [extraClassName])}>
                {content}
            </div>
        </DynamicReducersHandler>
    );
});
