import { useState, useEffect } from 'react';

/**
 * Hook to track scroll position
 * Follows Observer pattern for scroll events
 */
export function useScrollPosition(): number {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollY;
}

/**
 * Hook to detect if user has scrolled past a threshold
 */
export function useIsScrolled(threshold: number = 50): boolean {
    const scrollY = useScrollPosition();
    return scrollY > threshold;
}
