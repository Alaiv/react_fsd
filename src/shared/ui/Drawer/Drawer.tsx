import { classNames, Mods } from 'shared/lib/classNames';
import { memo, ReactNode } from 'react';
import { useTheme } from 'app/providers/themeProvider';
import { Portal } from '../portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import cl from './Drawer.module.scss';

interface DrawerProps {
    extraClassName?: string;
    children: ReactNode;
    isOpen?: boolean,
    onClose?: () => void,
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        extraClassName,
        children,
        onClose,
        isOpen,
    } = props;

    const { theme } = useTheme();

    const mods: Mods = {
        [cl.opened]: isOpen,
    };

    return (
        <Portal>
            <div className={classNames(cl.Drawer, mods, [extraClassName, theme, 'app_drawer'])}>
                <Overlay onClick={onClose} />
                <div className={cl.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
});
