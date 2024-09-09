"use client";
import React from "react";
import clsx from "clsx";
import useInterval from "@/hooks/useInterval";

const CTASection = () => {
  const headerContent = useInterval(
    ["Stronger than Steel", "Smoother than Silk"],
    { interval: 3000 },
  );
  return (
    <section className="z-10 bg-green-4 py-20">
      <div className="flex w-full justify-center">
        <h3
          className={clsx(
            "scale-y-[1.5] transform whitespace-nowrap text-[48px] font-bold uppercase tracking-tighter text-green-4",
            "bg-gradient-to-b from-green-2 to-green-3 bg-clip-text text-transparent",
          )}
        >
          {headerContent}
        </h3>
      </div>
      <div className="m-auto grid max-w-[400px] grid-rows-[min-content_min-content] justify-center gap-4">
        <p className="text-lg tracking-wide text-gray-100">
          Discover the exceptional strength of SpyderGlue and learn more about
          how it can transform your projects today!
        </p>
        <span>
          <button className="rounded-full bg-black-1 px-4 py-2 tracking-wider text-white hover:text-green-1">
            Learn More
          </button>
        </span>
      </div>
    </section>
  );
};

export default CTASection;
