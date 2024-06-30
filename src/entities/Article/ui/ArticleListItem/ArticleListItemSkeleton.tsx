import { classNames } from 'shared/lib/classNames';
import { Card } from 'shared/ui/Card/Card';
import { HTMLAttributes } from 'react';
import { Skeleton } from 'shared/ui/skeleton/Skeleton';
import { ArticleViewType } from '../../model/types/types';
import cl from './ArticleListItem.module.scss';

export interface ArticleListItemSkeletonProps extends HTMLAttributes<HTMLDivElement> {
    extraClassName?: string;
    viewType?: string;
}

export const ArticleListItemSkeleton = (props: ArticleListItemSkeletonProps) => {
    const {
        extraClassName,
        viewType = ArticleViewType.CARD,
    } = props;

    if (viewType === ArticleViewType.LINE) {
        return (
            <div className={classNames(cl.ArticleListItem, {}, [extraClassName, cl[viewType]])}>
                <Card>
                    <div className={cl.header}>
                        <Skeleton borderRadius="50%" height={30} width={30} />
                        <Skeleton width={150} height={16} extraClassName={cl.date} />
                    </div>
                    <Skeleton width={250} height={24} extraClassName={cl.title} />
                    <Skeleton height={200} extraClassName={cl.image} />
                    <div className={cl.footer}>
                        <Skeleton height={36} width={200} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cl.ArticleListItem, {}, [extraClassName, cl[viewType]])}>
            <Card>
                <div className={cl.preview}>
                    <Skeleton width={200} height={120} extraClassName={cl.image} />
                </div>
                <div className={cl.content}>
                    <Skeleton width={150} height={18} extraClassName={cl.types} />
                </div>
                <Skeleton width={100} height={16} extraClassName={cl.title} />
            </Card>
        </div>
    );
};
