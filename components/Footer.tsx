import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoSVG from "@/public/logo.svg";

const Footer = () => {
  return (
    <footer className="relative z-10 flex h-[300px] justify-center bg-black-2 text-white">
      <div className="grid h-full w-full max-w-7xl grid-cols-2 px-8">
        <div className="items-left flex flex-col py-12">
          <div className="relative h-full w-[200px]">
            <Image
              src={LogoSVG}
              alt="SpyderGlue logo"
              className="cursor-pointer"
              fill
            />
          </div>
          <div className="text-sm font-light">© SpyderGlue LLC 2024</div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col py-12 text-right font-light">
            <Link href="#our-story" className="hover:text-green-1">
              Our Story
            </Link>
            <Link href="/#shop" className="hover:text-green-1">
              Shop
            </Link>
            <Link href="/#resources" className="hover:text-green-1">
              Resources
            </Link>
            <Link href="/projects" className="hover:text-green-1">
              Projects
            </Link>
            <Link href="/#contact-us" className="hover:text-green-1">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
