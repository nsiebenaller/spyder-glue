import type { Metadata } from "next";
import { hind } from "@/styles/fonts";
import "./globals.css";
import clsx from "clsx";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Spyder Glue",
  description: "Smoother than silk, Stronger than steel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(hind.className, "bg-black-1")}>{children}</body>
    </html>
  );
}
