"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);

  // Disable scrolling when sidebar is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [mobileMenuOpen]);

  const handleLogoClick = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 z-30 h-16 w-full bg-black-1 shadow-md">
      <div
        className={clsx(
          "mx-auto grid h-full w-full max-w-7xl grid-cols-1 items-center px-8 text-white",
          "md:grid-cols-3",
        )}
      >
        <div className="hidden gap-8 md:flex">
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
        <div className="hidden justify-end md:flex">
          <HeaderLink href="#contact-us">Contact Us</HeaderLink>
        </div>
        <div className="absolute right-4 block md:hidden">
          <span
            className="material-symbols-rounded cursor-pointer text-white hover:text-green-1"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            menu
          </span>
        </div>
      </div>
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
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

const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  return (
    <>
      <div
        className={clsx(
          "pointer-events-none fixed left-0 top-0 z-40 h-full w-full bg-black-0",
          isOpen ? "opacity-50" : "opacity-0",
        )}
      />
      <div
        className={clsx(
          "fixed right-0 top-0 z-50 h-full bg-black-2 shadow-2xl transition-all",
          isOpen ? "w-[75%] p-8" : "w-0 overflow-hidden",
        )}
      >
        <div className="flex justify-end">
          <span
            className="material-symbols-rounded cursor-pointer text-white hover:text-green-1"
            onClick={() => onClose()}
          >
            close
          </span>
        </div>
        Mobile Menu
      </div>
    </>
  );
};
