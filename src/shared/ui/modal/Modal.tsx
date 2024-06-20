import { classNames } from 'shared/lib/classNames';
import {
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/portal/Portal';
import { useTheme } from 'app/providers/themeProvider';
import cl from './Modal.module.scss';

export interface ModalProps {
    extraClassName?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const TIMEOUT = 300;

export const Modal = (props: ModalProps) => {
    const {
        extraClassName,
        children,
        isOpen,
        onClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
    const { theme } = useTheme();

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
            window.addEventListener('keydown', keyDownHandler);
        }

        return () => {
            clearTimeout(timeoutRef.current);
            window.removeEventListener('keydown', keyDownHandler);
        };
    }, [isOpen, keyDownHandler]);

    const mods = {
        [cl.open]: isOpen,
        [cl.closing]: isClosing,
    };

    return (
        <Portal>
            <div
                className={
                    classNames(cl.Modal, mods, [extraClassName, cl[theme]])
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
