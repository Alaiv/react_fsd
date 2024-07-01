import { useCallback, useRef } from 'react';

export const useThrottling = (cb: (...args: any[]) => void, timeout: number) => {
    const throttleRef = useRef(false);

    return useCallback((...args: any[]) => {
        if (!throttleRef.current) {
            throttleRef.current = true;
            cb(...args);
            setTimeout(() => {
                throttleRef.current = false;
            }, timeout);
        }
    }, [cb, timeout]);
};
