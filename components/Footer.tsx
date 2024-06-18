import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 flex h-[300px] justify-center bg-black-2 text-white">
      <div className="grid h-full w-full max-w-7xl grid-cols-2">
        <div className="items-left flex flex-col py-12">
          <div className="relative h-full w-[200px] transition-all hover:h-[70px] hover:w-[210px]">
            <Image
              src="/logo.svg"
              alt="SpyderGlue logo"
              className="cursor-pointer"
              fill
            />
          </div>
          <div className="text-sm font-light">© SpyderGlue LLC 2024</div>
        </div>
        <div className="flex flex-col py-12 text-right font-light">
          <Link href="#our-story" className="hover:text-green-1">
            Our Story
          </Link>
          <Link href="#products" className="hover:text-green-1">
            Products
          </Link>
          <Link href="#references" className="hover:text-green-1">
            References
          </Link>
          <Link href="#references" className="hover:text-green-1">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
