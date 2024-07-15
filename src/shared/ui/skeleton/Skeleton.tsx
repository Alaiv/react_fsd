import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CSSProperties } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cl from './Skeleton.module.scss';

export interface SkeletonProps {
    extraClassName?: string;
    height?: number | string;
    width?: number | string;
    borderRadius?: number | string;
}

export const Skeleton = (props: SkeletonProps) => {
    const {
        borderRadius,
        height,
        width,
        extraClassName,
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius,
    };

    return (
        <div
            style={styles}
            className={classNames(cl.Skeleton, {}, [extraClassName])}
        />
    );
};
