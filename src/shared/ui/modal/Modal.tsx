import { classNames } from 'shared/lib/classNames';
import {
    MutableRefObject,
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/portal/Portal';
import cl from './Modal.module.scss';

export interface ModalProps {
    extraClassName?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean
}

const TIMEOUT = 300;

export const Modal = (props: ModalProps) => {
    const {
        extraClassName,
        children,
        isOpen,
        onClose,
        lazy = false,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timeoutRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    const mods = {
        [cl.open]: isOpen,
        [cl.closing]: isClosing,
    };

    const onCloseHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeoutRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, TIMEOUT);
        }
    }, [onClose]);

    const keyDownHandler = useCallback((e) => {
        if (e.key === 'Escape') {
            onCloseHandler();
        }
    }, [onCloseHandler]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', keyDownHandler);
        }

        return () => {
            clearTimeout(timeoutRef.current);
            window.removeEventListener('keydown', keyDownHandler);
        };
    }, [isOpen, keyDownHandler]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                className={
                    classNames(cl.Modal, mods, [extraClassName])
                }
                onClick={onCloseHandler}
            >
                <div className={cl.area}>
                    <div className={cl.content} onClick={(e) => e.stopPropagation()}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
