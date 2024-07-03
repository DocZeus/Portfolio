import React from 'react';
import { Suspense } from 'react';
import { AppHeader, AppFooter, AppMetadata } from '../components';
import Loading from './loading';
import 'styles/globals.css';
import { ThemeContext } from '../context';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = { ...AppMetadata };

const RootLayout: React.FC<RootLayoutProps> = ({ children }: RootLayoutProps) => {
  return (
    <ThemeContext>
      <div>
        <AppHeader />
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
        <AppFooter />
      </div>
    </ThemeContext>
  );
};

export default RootLayout;