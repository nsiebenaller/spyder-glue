import type { Metadata } from "next";
import clsx from "clsx";
import fonts from "@/styles/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

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
      <body className={clsx(fonts.hind, "mt-16 bg-black-1")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
