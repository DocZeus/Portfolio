import { useCallback, useEffect, useState } from "react";

export const useMediaQuery = (
    matchMediaQuery: string = "max-width: 767px"
): boolean => {
    const [targetReached, setTargetReached] = useState<boolean>(false);

    const updateTarget = useCallback((e: MediaQueryListEvent) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(${matchMediaQuery})`);
        media.addEventListener("change", updateTarget);

        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
            setTargetReached(true);
        }

        return () => media.removeEventListener("change", updateTarget);
    }, [matchMediaQuery, updateTarget]);

    return targetReached;
};
