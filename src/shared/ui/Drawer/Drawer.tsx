import {
    memo, ReactNode, useCallback, useEffect,
} from 'react';
import { classNames } from '@/shared/lib/classNames';
import { useTheme } from '@/app/providers/themeProvider';
import { AnimationContextProvider, useAnimationLoader } from '@/shared/lib/components/AnimationProvider';
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

const height = window.innerHeight - 100;

const DrawerContent = memo((props: DrawerProps) => {
    const {
        extraClassName,
        children,
        onClose,
        isOpen,
        lazy,
    } = props;

    const { Spring, Gesture } = useAnimationLoader();

    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));
    const { theme } = useTheme();

    const open = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    useEffect(() => {
        if (isOpen) {
            open();
        }
    }, [isOpen, api, open]);

    const close = useCallback((velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...Spring.config.stiff, velocity },
            onResolve: onClose,
        });
    }, [api, Spring.config.stiff, onClose]);

    const bind = Gesture.useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel, canceled,
        }) => {
            if (my < -70) cancel();

            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close();
                } else {
                    open();
                }
            } else {
                api.start({ y: my, immediate: true });
            }
        },
        {
            from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
        },
    );

    if (!isOpen) {
        return null;
    }

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    return (
        <Portal>
            <div className={classNames(cl.Drawer, {}, [extraClassName, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <Spring.a.div
                    className={cl.content}
                    {...bind()}
                    style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
                >
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    );
});

const DrawerAsync = (props: DrawerProps) => {
    const { isLoaded } = useAnimationLoader();

    if (!isLoaded) {
        return null;
    }

    return (
        <DrawerContent {...props} />
    );
};

export const Drawer = (props: DrawerProps) => (
    <AnimationContextProvider>
        <DrawerAsync {...props} />
    </AnimationContextProvider>
);
