import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { useModal } from '@/shared/lib/hooks/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../portal/Portal';
import cl from './Modal.module.scss';

export interface ModalProps {
    extraClassName?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean
}

export const Modal = (props: ModalProps) => {
    const {
        extraClassName,
        children,
        isOpen,
        onClose,
        lazy = false,
    } = props;

    const {
        onCloseHandler,
        isClosing,
        isMounted,
    } = useModal({ close: onClose, isOpen });

    const mods = {
        [cl.open]: isOpen,
        [cl.closing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                className={
                    classNames(cl.Modal, mods, [extraClassName])
                }
            >
                <Overlay onClick={onCloseHandler} />
                <div className={cl.content} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
