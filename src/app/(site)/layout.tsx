import React from "react";
import '../globals.css';
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

type RootLayoutProps = {
  children: React.ReactNode;
  pageName: string;
};

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
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