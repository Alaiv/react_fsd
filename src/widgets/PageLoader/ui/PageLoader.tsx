import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Loader } from '@/shared/ui/loader/Loader';
import cl from './PageLoader.module.scss';

export interface PageLoaderProps {
    extraClassName?: string;
}

export const PageLoader = memo(({ extraClassName }: PageLoaderProps) => (
    <div className={classNames(cl.PageLoader, {}, [extraClassName])}>
        <Loader />
    </div>
));
