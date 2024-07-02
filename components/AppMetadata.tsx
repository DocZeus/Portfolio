const author = "Swapnil Toppo";
const description =
    "Software developer from Bharat, who loves to develop beautiful websites, single page applications, AI/ML tools, scripts using React, Next.js and Python";
const url = "https://vasile-novatchii.netlify.app";

interface Author {
    name: string;
    url: string;
}

interface Image {
    url: string;
    width: number;
    height: number;
    alt: string;
}

interface OpenGraph {
    title: string;
    description: string;
    url: string;
    siteName: string;
    images: Image[];
    locale: string;
    type: string;
}

interface AppMetadata {
    metadataBase: URL;
    title: {
        default: string;
        template: string;
    };
    description: string;
    icons: {
        icon: string;
    };
    keywords: string[];
    creator: string;
    authors: Author[];
    colorScheme: string;
    openGraph: OpenGraph;
}

export const AppMetadata: AppMetadata = {
    metadataBase: new URL("https://vasile-novatchii.netlify.app/"),
    title: {
        default: `Portfolio | ${author}`,
        template: `%s | ${author}`
    },
    description: description,
    icons: {
        icon: "/favicon.png"
    },
    keywords: [
        "Swapnil Toppo",
        "Swapnil Toppo - software developer",
        "Frontend developer",
        "Portfolio website",
        "Backend developer",
        "Frontend Developer Portfolio"
    ],
    creator: author,
    authors: [{ name: author, url: url }],
    colorScheme: "dark",
    openGraph: {
        title: `${author} | Portfolio`,
        description: description,
        url: url,
        siteName: `${author} | Portfolio`,
        images: [
            {
                url: "https://vasile-novatchii.netlify.app/screenshot.webp",
                width: 800,
                height: 600,
                alt: "My personal portfolio website"
            },
            {
                url: "https://vasile-novatchii.netlify.app/screenshot.webp",
                width: 1800,
                height: 1600,
                alt: "My personal portfolio website"
            }
        ],
        locale: "en-US",
        type: "website"
    }
};
