"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const handleLogoClick = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <header className="sticky top-0 z-50 flex justify-center bg-black-1 shadow-md">
      <div className="grid h-16 w-full max-w-7xl grid-cols-3 items-center px-8 text-white">
        <div className="flex gap-8">
          <HeaderLink href="#products">Products</HeaderLink>
          <HeaderLink href="#resources">Resources</HeaderLink>
        </div>
        <div className="relative flex h-full flex-1 justify-center">
          <Link
            href="/"
            onClick={handleLogoClick}
            scroll={false}
            className="absolute h-full w-[200px] transition-all hover:h-[70px] hover:w-[210px]"
          >
            <Image
              src="/logo.svg"
              alt="SpyderGlue logo"
              className="cursor-pointer"
              fill
            />
          </Link>
        </div>
        <div className="flex justify-end">
          <HeaderLink href="#contact-us">Contact Us</HeaderLink>
        </div>
      </div>
    </header>
  );
};

export default Header;

const HeaderLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => {
  return (
    <Link
      href={href}
      className="inline-block font-light transition-all hover:text-green-1"
    >
      {children}
    </Link>
  );
};
