import type { Metadata } from "next";
import fonts from "@/styles/fonts";
import "./globals.css";
import clsx from "clsx";

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
      <body className={clsx(fonts.hind, "bg-black-1")}>{children}</body>
    </html>
  );
}
