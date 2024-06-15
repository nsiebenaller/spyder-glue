import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-center bg-black-1 shadow-md">
      <div className="grid h-16 w-full max-w-7xl grid-cols-3 items-center px-8 text-white">
        <div className="flex gap-8">
          <HeaderLink href="#products">Products</HeaderLink>
          <HeaderLink href="#resources">Resources</HeaderLink>
        </div>
        <div>
          <div className="flex flex-1 justify-center">
            <Image
              src="/logo.svg"
              alt="SpyderGlue logo"
              width={200}
              height={60}
            />
          </div>
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
    <a
      href={href}
      className="hover:text-green-1 inline-block text-base font-light transition-all"
    >
      {children}
    </a>
  );
};
