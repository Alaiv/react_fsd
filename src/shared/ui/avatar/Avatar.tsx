import { useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cl from './Avatar.module.scss';

export interface AvatarProps {
    extraClassName?: string;
    size: number;
    src?: string,
    alt: string,
}

export const Avatar = ({
    extraClassName, size, src, alt,
}: AvatarProps) => {
    const styles = useMemo(() => ({
        width: size,
        height: size,
    }), [size]);

    return (
        <img
            style={styles}
            className={classNames(cl.Avatar, {}, [extraClassName])}
            src={src}
            alt={alt}
        />
    );
};
