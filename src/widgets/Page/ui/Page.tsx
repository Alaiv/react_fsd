import { classNames } from 'shared/lib/classNames';
import { MutableRefObject, UIEvent, useRef } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/storeProvider';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useConditionalEffect } from 'shared/lib/hooks/useConditionalEffect';
import { useThrottling } from 'shared/lib/hooks/useThrottling';
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
    const rootRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLElement>;
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
        <section id={PAGE_ID} onScroll={scrollHandler} ref={rootRef} className={classNames(cl.Page, {}, [extraClassName])}>
            {children}
            <span ref={triggerRef} style={{ width: '40px', height: '40px', display: 'inline-block' }} />
        </section>
    );
};
