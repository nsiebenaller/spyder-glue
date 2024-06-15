"use client";
import { playfair } from "@/styles/fonts";
import clsx from "clsx";
import React from "react";

const Banner = () => {
  return (
    <section className="w-full py-16">
      <div className="flex h-16 items-center justify-center gap-12 overflow-hidden bg-green-1 py-16 text-green-3">
        <div
          className={clsx(
            playfair.className,
            "cursor-pointer text-[6rem] font-bold italic",
          )}
        >
          Shop
        </div>
      </div>
    </section>
  );
};

export default Banner;
