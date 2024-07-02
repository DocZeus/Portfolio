import React from "react";
import { Suspense, ReactNode } from "react";
import { AppHeader, AppFooter, AppMetadata } from "../components";
import Loading from "./loading";
import "../styles/globals.css";
import { ThemeContext } from "../context";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = { ...AppMetadata };

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ThemeContext>
          <AppHeader />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <AppFooter />
        </ThemeContext>
      </body>
    </html>
  );
}