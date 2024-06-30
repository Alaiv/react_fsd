import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollProps {
    callback?: () => void;
    rootRef: MutableRefObject<HTMLElement>;
    triggerRef: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = (props: UseInfiniteScrollProps) => {
    const {
        callback,
        rootRef,
        triggerRef,
    } = props;

    useEffect(() => {
        const options = {
            root: rootRef.current,
            rootMargin: '0px',
            threshold: 1.0,
        };

        const observer = new IntersectionObserver(([first]) => {
            if (first.isIntersecting) {
                callback?.();
            }
        }, options);

        if (callback) {
            observer.observe(triggerRef?.current);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [callback, rootRef, triggerRef]);
};
