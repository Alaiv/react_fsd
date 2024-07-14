import {
    MutableRefObject, useCallback, useEffect, useRef, useState,
} from 'react';

export interface UseModalProps {
    close?: () => void;
    isOpen?: boolean;
    animationDelay?: number;
}

export const useModal = ({ close, isOpen = false, animationDelay = 300 }: UseModalProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timeoutRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const onCloseHandler = useCallback(() => {
        if (close) {
            setIsClosing(true);
            timeoutRef.current = setTimeout(() => {
                close();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [animationDelay, close]);

    const keyDownHandler = useCallback((e: any) => {
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

    return {
        isClosing,
        isMounted,
        onCloseHandler,
    };
};
