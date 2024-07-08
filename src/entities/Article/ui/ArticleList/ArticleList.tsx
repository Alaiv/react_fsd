import { classNames } from 'shared/lib/classNames';
import { Text, TextSize } from 'shared/ui/text/Text';
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget } from 'react';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/ui/Page';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../../ui/ArticleListItem/ArticleListItem';
import { Article, ArticleViewType } from '../../model/types/types';
import cl from './ArticleList.module.scss';

export interface ArticleListProps {
    extraClassName?: string;
    viewType?: ArticleViewType;
    articles: Article[];
    isLoading?: boolean;
    error?: string;
    target?: HTMLAttributeAnchorTarget,
    virualized?: boolean,
}

const renderSkeleton = (view: ArticleViewType) => {
    const arr = view === ArticleViewType.LINE
        ? Array(3).fill(0)
        : Array(9).fill(0);

    return (
        arr.map((_, i) => <ArticleListItemSkeleton key={i} viewType={view} />)
    );
};

export const ArticleList = (props: ArticleListProps) => {
    const {
        extraClassName,
        viewType = ArticleViewType.CARD,
        articles = [],
        isLoading,
        error,
        target,
        virualized = true,
    } = props;
    const { t } = useTranslation();
    const isBig = viewType === ArticleViewType.LINE;

    const itemsPerRow = isBig ? 1 : (Math.floor(window.innerWidth / 270) - 1);
    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

    const row = ({ index, key, style }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    article={articles[i]}
                    viewType={viewType}
                    target={target}
                    key={`${key}-${i}`}
                    extraClassName={cl.card}
                />,
            );
        }

        return (
            <div style={style} key={key} className={cl.row}>
                {items}
            </div>
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cl.ArticleList, {}, [extraClassName])}>
                <Text title={t('Статьи не найдены')} size={TextSize.L} />
            </div>
        );
    }

    // @ts-ignore
    return (
        <WindowScroller scrollElement={document.getElementById(PAGE_ID) as Element}>
            {
                ({
                    width, height, isScrolling, onChildScroll, scrollTop, registerChild,
                }) => (
                    // @ts-ignore
                    <div ref={registerChild} className={classNames(cl.ArticleList, {}, [extraClassName, cl[viewType]])}>
                        {
                            virualized
                                ? (
                                    <List
                                        autoHeight
                                        height={height ?? 700}
                                        isScrolling={isScrolling}
                                        onScroll={onChildScroll}
                                        scrollTop={scrollTop}
                                        rowCount={rowCount}
                                        width={width ? width - 80 : 1200}
                                        rowHeight={isBig ? 600 : 330}
                                        rowRenderer={row}
                                    />
                                )
                                : articles.map((article, i) => (
                                    <ArticleListItem
                                        article={article}
                                        viewType={viewType}
                                        target={target}
                                        key={article.id}
                                        extraClassName={cl.card}
                                    />
                                ))
                        }
                        {isLoading && renderSkeleton(viewType)}
                    </div>
                )
            }
        </WindowScroller>
    );
};
