"use client";
import React from "react";
import cn from "@/lib/cn";
import fonts from "@/styles/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <html lang="en">
      <Head>
        <title>Spyder Glue</title>
        <meta
          name="description"
          content="Smoother than silk, Stronger than steel"
        />
      </Head>
      <body className={cn(fonts.hind, "mt-16 bg-black-1")}>
        <QueryClientProvider client={queryClient}>
          <Header />
          {children}
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
