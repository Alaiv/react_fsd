import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cl from './Overlay.module.scss';

interface OverlayProps {
    extraClassName?: string;
    onClick?: () => void;
}

export const Overlay = memo((props: OverlayProps) => {
    const { extraClassName, onClick } = props;

    return (
        <div onClick={onClick} className={classNames(cl.Overlay, {}, [extraClassName])} />
    );
});
