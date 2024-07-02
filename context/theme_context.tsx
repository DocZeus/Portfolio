"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

interface ThemeContextProps {
    children: ReactNode;
}

export function ThemeContext({ children }: ThemeContextProps) {
    return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}