import React from "react";
import Header from "@/components/Header";
import '../globals.css';
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

type RootLayoutProps = {
  children: React.ReactNode;
  pageName: string;
};

export default function RootLayout({
  children,
  pageName,
}: Readonly<RootLayoutProps>) {
  return (
    <>
      <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <body>
          <Header pageName={pageName} />
          <main className="container max-w-7xl mb-40">{children}</main>
        </body>
      </html>
    </>
  );
}