"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { initial, animate, exit, transition } from "../utils/motions";
import { SOCIAL_MEDIA, SocialMediaItem } from "../constants/social_media";

export function ConnectMedia(): JSX.Element {
    return (
        <LazyMotion features={domAnimation}>
            <m.nav role="menu" initial={initial} animate={animate} exit={exit} transition={transition}>
                <ul className="flex items-center gap-5">
                    {SOCIAL_MEDIA.map((item: SocialMediaItem) => (
                        <li key={item.id}>
                            <a
                                href={item.url}
                                target="_blank"
                                aria-label={item.title}
                                title={item.title}
                                className="text-2xl"
                            >
                                {renderIcon(item.icon)}
                            </a>
                        </li>
                    ))}
                </ul>
            </m.nav>
        </LazyMotion>
    );
}

const renderIcon = (IconComponent: React.ComponentType<any>) => {
    return <IconComponent />;
};