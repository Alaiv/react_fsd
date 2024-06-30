import { classNames } from 'shared/lib/classNames';
import { MutableRefObject, useRef } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import cl from './Page.module.scss';

export interface PageProps {
    extraClassName?: string;
    children?: React.ReactNode;
    scrollIntersectionHandler?: () => void;
}

export const Page = ({ extraClassName, children, scrollIntersectionHandler }: PageProps) => {
    const ref = useRef() as MutableRefObject<HTMLElement>;
    const ref2 = useRef() as MutableRefObject<HTMLElement>;

    useInfiniteScroll({
        rootRef: ref,
        triggerRef: ref2,
        callback: scrollIntersectionHandler,
    });

    return (
        <section ref={ref} className={classNames(cl.Page, {}, [extraClassName])}>
            {children}
            <span ref={ref2} />
        </section>
    );
};
