import { MutableRefObject, UIEvent, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll';
import { StateSchema } from '@/app/providers/storeProvider';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useConditionalEffect } from '@/shared/lib/hooks/useConditionalEffect';
import { useThrottling } from '@/shared/lib/hooks/useThrottling';
import { getPageScrollByPath } from '../model/selectors/pageSelectors';
import { PageSliceActions } from '../model/slice/PageSlice';
import cl from './Page.module.scss';

export interface PageProps {
    extraClassName?: string;
    children?: React.ReactNode;
    scrollIntersectionHandler?: () => void;
    isSaveScroll?: boolean;
}

export const PAGE_ID = 'page_id';

export const Page = ({
    extraClassName, children, scrollIntersectionHandler, isSaveScroll = true,
}: PageProps) => {
    const rootRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const { pathname } = useLocation();
    const dispatch = useAppDispatch();
    const scrollPathLocation = useSelector((state: StateSchema) => getPageScrollByPath(state, pathname));

    useInfiniteScroll({
        rootRef,
        triggerRef,
        callback: scrollIntersectionHandler,
    });

    useConditionalEffect(() => {
        rootRef.current.scrollTop = scrollPathLocation;
    });

    const scrollHandler = useThrottling((e: UIEvent<HTMLDivElement>) => {
        if (isSaveScroll) {
            dispatch(PageSliceActions.setScrollPosition({
                path: pathname,
                position: e.currentTarget.scrollTop,
            }));
        }
    }, 500);

    return (
        <main id={PAGE_ID} onScroll={scrollHandler} ref={rootRef} className={classNames(cl.Page, {}, [extraClassName])}>
            {children}
            <div ref={triggerRef} className={cl.trigger} />
        </main>
    );
};
