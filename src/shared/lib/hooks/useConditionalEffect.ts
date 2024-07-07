import { useEffect } from 'react';

export function useConditionalEffect(callback: () => void) {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
            callback();
        }

        // eslint-disable-next-line
    }, []);
}
