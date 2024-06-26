import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/text/Text';
import { Icon } from 'shared/ui/icon/Icon';
import ViewIcon from 'shared/assets/icons/viewed.svg';
import { Card } from 'shared/ui/Card/Card';
import { HTMLAttributes, useCallback } from 'react';
import { Avatar } from 'shared/ui/avatar/Avatar';
import { ArticleTextBlock } from 'entities/Article/ui/ArticleTextBlock/ArticleTextBlock';
import { Button, ButtonType } from 'shared/ui/button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePaths } from 'shared/config/routeConfig/RouteConfig';
import {
    Article, ArticleViewType, BlockType, TextBlock,
} from '../../model/types/types';
import cl from './ArticleListItem.module.scss';

export interface ArticleListProps extends HTMLAttributes<HTMLDivElement> {
    extraClassName?: string;
    viewType?: string;
    article: Article;
}

export const ArticleListItem = (props: ArticleListProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const {
        extraClassName,
        viewType = ArticleViewType.CARD,
        article,
    } = props;

    const types = <Text extraClassName={cl.types} text={article.type.join(', ')} />;
    const image = <img src={article.img} alt={article.title} className={cl.image} />;
    const viewInfo = (
        <div className={cl.info}>
            <Text text={article.views.toString()} />
            <Icon Svg={ViewIcon} />
        </div>
    );

    const openArticleHandler = useCallback(() => {
        navigate(RoutePaths.articleDetail + article.id);
    }, [article.id, navigate]);

    if (viewType === ArticleViewType.LINE) {
        const textBlock: TextBlock = article.blocks
            .find((block) => block.type === BlockType.TEXT) as TextBlock;

        return (
            <div className={classNames(cl.ArticleListItem, {}, [extraClassName, cl[viewType]])}>
                <Card>
                    <div className={cl.header}>
                        <Avatar size={30} alt={article.user.username} src={article.user.avatar} />
                        <Text text={article.user.username} />
                        <Text text={article.createdAt} extraClassName={cl.date} />
                    </div>
                    <Text title={article.title} extraClassName={cl.title} size={TextSize.L} />
                    {types}
                    {image}
                    <ArticleTextBlock paragraphs={textBlock.paragraphs} extraClassName={cl.textBlock} />
                    <div className={cl.footer}>
                        <Button
                            btnType={ButtonType.OUTLINE}
                            onClick={openArticleHandler}
                        >
                            {`${t('Читать далее')}...`}
                        </Button>
                        {viewInfo}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cl.ArticleListItem, {}, [extraClassName, cl[viewType]])}>
            <Card onClick={openArticleHandler}>
                <div className={cl.preview}>
                    <Text extraClassName={cl.date} text={article.createdAt} />
                    {image}
                </div>
                <div className={cl.content}>
                    {types}
                    {viewInfo}
                </div>
                <Text text={article.title} extraClassName={cl.title} />
            </Card>
        </div>
    );
};
