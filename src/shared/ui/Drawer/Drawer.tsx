import { classNames, Mods } from 'shared/lib/classNames';
import { memo, ReactNode } from 'react';
import { useTheme } from 'app/providers/themeProvider';
import { useModal } from 'shared/lib/hooks/useModal';
import { Portal } from '../portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import cl from './Drawer.module.scss';

interface DrawerProps {
    extraClassName?: string;
    children: ReactNode;
    isOpen?: boolean,
    onClose?: () => void,
    lazy?: boolean
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        extraClassName,
        children,
        onClose,
        isOpen,
        lazy,
    } = props;

    const { theme } = useTheme();

    const {
        onCloseHandler,
        isClosing,
        isMounted,
    } = useModal({ close: onClose, isOpen });

    const mods = {
        [cl.opened]: isOpen,
        [cl.closing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cl.Drawer, mods, [extraClassName, theme, 'app_drawer'])}>
                <Overlay onClick={onCloseHandler} />
                <div className={cl.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
});
