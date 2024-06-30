import { useMemo, useState } from 'react';

export interface UseHoverHandlers {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

type useHoverReturn = [boolean, UseHoverHandlers];

export const useHover = (): useHoverReturn => {
    const [isHover, setIsHover] = useState(false);

    const onMouseEnter = () => {
        setIsHover(true);
    };

    const onMouseLeave = () => {
        setIsHover(false);
    };

    return useMemo(() => [isHover, { onMouseEnter, onMouseLeave }], [isHover]);
};
