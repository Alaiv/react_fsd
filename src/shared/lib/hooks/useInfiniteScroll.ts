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
        const root = rootRef.current;
        const trigger = triggerRef.current;

        const options = {
            root,
            rootMargin: '0px',
            threshold: 1.0,
        };

        const observer = new IntersectionObserver(([first]) => {
            if (first.isIntersecting) {
                callback?.();
            }
        }, options);

        if (callback && trigger) {
            observer.observe(triggerRef.current);
        }

        return () => {
            if (observer) {
                observer.unobserve(trigger);
            }
        };
    }, [callback, rootRef, triggerRef]);
};
