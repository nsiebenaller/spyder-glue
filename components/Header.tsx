"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import fonts from "@/styles/fonts";
import Icon from "./Icon";
import LogoSVG from "@/public/logo.svg";
import TopBanner from "./TopBanner";

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
    <header className="fixed top-0 z-30 w-full bg-black-1 shadow-md">
      <TopBanner />
      <div
        className={clsx(
          "mx-auto grid w-full max-w-7xl grid-cols-1 items-center px-8 text-white",
          "md:grid-cols-3",
        )}
      >
        <div className="hidden gap-8 py-3 md:flex">
          <HeaderLink href="/#shop">Shop</HeaderLink>
          <HeaderLink href="/#resources">Resources</HeaderLink>
          <HeaderLink href="/projects">Projects</HeaderLink>
        </div>
        <div className="relative flex h-[70px] items-center justify-center">
          <Link
            href="/"
            onClick={handleLogoClick}
            scroll={false}
            className="h-min"
          >
            <Image
              src={LogoSVG}
              alt="SpyderGlue logo"
              className="h-[60px] cursor-pointer transition-all hover:h-[70px] hover:w-[210px]"
            />
          </Link>
        </div>
        <div className="hidden justify-end py-3 md:flex">
          <HeaderLink href="/#contact-us">Contact Us</HeaderLink>
        </div>
        <div className="absolute right-4 flex h-full flex-col justify-center md:hidden">
          <Icon
            icon="menu"
            className="cursor-pointer text-white hover:text-green-1"
            onClick={() => {
              setMobileMenuOpen((prev) => !prev);
            }}
          />
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
      className={`${fonts.hind} inline-block text-lg font-light text-cream transition-all hover:text-green-1`}
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
          "fixed left-0 top-0 z-40 h-full w-full bg-black-0",
          isOpen ? "opacity-50" : "pointer-events-none opacity-0",
        )}
        onClick={() => onClose()}
      />
      <div
        className={clsx(
          "fixed top-0 z-50 h-full w-[75%] bg-black-2 p-8 shadow-2xl transition-all",
          isOpen ? "right-0" : "-right-[75%] overflow-hidden",
        )}
      >
        <div className={clsx("mb-8 flex items-center justify-between")}>
          <Image
            src="/logo.svg"
            alt="SpyderGlue logo"
            width={150}
            height={50}
          />
          <div className="flex justify-end">
            <Icon
              icon="close"
              className="cursor-pointer text-cream hover:text-green-1"
              onClick={() => onClose()}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <MobileMenuItem
            label="Our Story"
            href="#our-story"
            onClose={onClose}
          />
          <MobileMenuItem label="Products" href="#products" onClose={onClose} />
          <MobileMenuItem
            label="Resources"
            href="#resources"
            onClose={onClose}
          />
          <MobileMenuItem
            label="Contact Us"
            href="#contact-us"
            onClose={onClose}
          />
        </div>
      </div>
    </>
  );
};

const MobileMenuItem: React.FC<{
  label: string;
  href: string;
  onClose: () => void;
}> = ({ label, href, onClose }) => {
  return (
    <Link
      href={href}
      className={clsx(
        `${fonts.hind} text-lg font-bold text-cream hover:text-green-1`,
      )}
      onClick={() => onClose()}
    >
      {label}
    </Link>
  );
};
