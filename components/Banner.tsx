"use client";
import { playfair } from "@/styles/fonts";
import clsx from "clsx";
import React from "react";

const Banner = () => {
  return (
    <section className="z-10 w-full py-16">
      <div className="flex h-16 items-center justify-center gap-12 overflow-hidden bg-green-1 py-16">
        <div
          className={clsx(
            playfair.className,
            "cursor-pointer text-[6rem] font-bold italic text-green-3 transition-all hover:text-black-1",
          )}
        >
          Shop Now
        </div>
      </div>
    </section>
  );
};

export default Banner;
