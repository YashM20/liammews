import React from "react";
import Header from "@/components/Header";

type PageLayoutProps = {
  children: React.ReactNode;
  pageName: string;
};

export default function PageLayout({
  children,
  pageName,
}: Readonly<PageLayoutProps>) {
  return (
    <>
        <Header pageName={pageName} />
          <main className="container-lg md:px-12 px-4 mb-40">{children}</main>
    </>
  );
}