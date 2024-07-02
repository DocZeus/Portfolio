"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { useScrollTo } from "../hooks";
import { BsArrowReturnLeft } from "react-icons/bs";
import { initial, animate, exit, transition } from "../utils";
import { MENU_OPTIONS, SITE_ROUTES, SITE_STRINGS } from "../constants";

interface MenuProps {
    onClick?: () => void;
}

interface MenuItem {
    id: string;
    name: string;
    url: string;
}

export function Menu({ onClick = () => { } }: MenuProps): JSX.Element | null {
    const pathname = usePathname();
    const { scrollToEl } = useScrollTo();

    const sortAscending = (a: MenuItem, b: MenuItem) => {
        return Number(a.id) - Number(b.id);
    }

    const handleOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const hash = e.currentTarget.getAttribute("href") || "";
        scrollToEl({ hash });
        window.setTimeout(() => onClick(), 350);
    };

    if (MENU_OPTIONS.length === 0) {
        return null;
    }

    const mainMenu = (
        <m.nav initial={initial} animate={animate} exit={exit} transition={transition} role="menu">
            <ul className="flex justify-center gap-5 flex-col md:flex-row items-start md:items-center">
                {MENU_OPTIONS.sort(sortAscending).map((menuItem: MenuItem) => (
                    <li key={menuItem.id}>
                        <a
                            href={menuItem.url}
                            title={menuItem.name}
                            onClick={handleOnClick}
                            className="relative text-xl hover:no-underline after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-0 after:bg-current after:transition-width after:duration-300 after:ease-in-out hover:after:w-full"
                        >
                            {menuItem.name}
                        </a>
                    </li>
                ))}
            </ul>
        </m.nav>
    );

    const backMenu = (
        <m.div initial={initial} animate={animate} exit={exit} transition={transition}>
            <Link
                href={SITE_ROUTES.home}
                title={SITE_STRINGS.backToMainPageTitle}
                className="icon-link-btn"
            >
                <span>
                    <BsArrowReturnLeft />
                </span>
                {SITE_STRINGS.backToMainText}
            </Link>
        </m.div>
    );

    const content = pathname === SITE_ROUTES.projects ? backMenu : mainMenu;

    return <LazyMotion features={domAnimation}>{content}</LazyMotion>;
}