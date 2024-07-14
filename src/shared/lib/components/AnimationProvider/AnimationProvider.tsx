import {
    createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState,
} from 'react';

export type SpringType = typeof import('@react-spring/web');
export type GestureType = typeof import('@use-gesture/react');

interface AnimationContextPayload {
    Gesture?: GestureType;
    Spring?: SpringType;
    isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContextPayload>({});

const loadAnimationImports = async () => Promise.all([
    import('@react-spring/web'),
    import('@use-gesture/react'),
]);

export const useAnimationLoader = () => useContext(AnimationContext) as Required<AnimationContextPayload>;

export const AnimationContextProvider = ({ children }: { children: ReactNode }) => {
    const springRef = useRef<SpringType>();
    const gestureRef = useRef<GestureType>();
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        loadAnimationImports()
            .then(([spring, gesture]) => {
                springRef.current = spring;
                gestureRef.current = gesture;
                setIsLoaded(true);
            });
    }, []);

    const value = useMemo(() => ({
        isLoaded,
        Spring: springRef.current,
        Gesture: gestureRef.current,
    }), [isLoaded]);

    return (
        <AnimationContext.Provider value={value}>
            {children}
        </AnimationContext.Provider>
    );
};
