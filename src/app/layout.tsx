import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SyncTabProvider } from "@/components/tab";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Frontend Book", template: "%s | Frontend Book" },
  description:
    "「Frontend Book」は、Webフロントエンドエンジニアを目指す方向けの学習サイトです。",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header className="fixed top-0 z-10 flex h-16 w-full items-center justify-center border-b border-b-neutral-300 backdrop-blur lg:justify-start lg:px-10">
          <Link href="/" className="text-xl font-bold">
            Frontend Book
          </Link>
        </header>
        <SyncTabProvider>{children}</SyncTabProvider>
      </body>
    </html>
  );
}
