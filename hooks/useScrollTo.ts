import { useEffect, useState } from "react";
import { navigationHeight } from "../utils/theme-config";

interface ScrollToElProps {
    hash: string;
}

export function useScrollTo(): { scrollToEl: (props: ScrollToElProps) => void } {
    const [height, setHeight] = useState<number>(navigationHeight);

    useEffect(() => {
        const handleResize = () => {
            if (window.matchMedia("(max-width: 480px)").matches) {
                setHeight(56);
            } else {
                setHeight(navigationHeight);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollToEl = (props: ScrollToElProps) => {
        const { hash } = props;
        const offsetTop = (document?.querySelector(hash) as HTMLElement | null)?.offsetTop ?? 0 - height;

        scroll({
            top: offsetTop,
            behavior: "smooth",
        });
    };

    return { scrollToEl };
}