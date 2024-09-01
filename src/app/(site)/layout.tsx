import React from "react";
import '../globals.css';
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} bg-white dark:bg-gray-950 text-gray-950 dark:text-white`}>
        <body>
          {children}
        </body>
      </html>
    </>
  );
}

export default RootLayout;