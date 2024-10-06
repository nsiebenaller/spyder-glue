import type { Metadata } from "next";
import fonts from "@/styles/fonts";
import "./globals.css";
import clsx from "clsx";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
