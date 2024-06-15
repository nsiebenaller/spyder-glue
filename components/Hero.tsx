import React from "react";
import { rozhaOne } from "@/styles/fonts";
import clsx from "clsx";

const Hero = () => {
  return (
    <section
      className={clsx("grid w-full grid-cols-1 gap-16 pt-20", "lg:grid-cols-2")}
    >
      <div className="flex items-center justify-end">
        <div className="h-[200px] w-[200px] bg-green-2">PRODUCT IMAGE</div>
      </div>
      <div
        className={clsx(
          "border-black-0 border-b-4 border-l-4 border-t-4",
          "ml-16 flex flex-col rounded-l-3xl bg-cream py-[6rem] pl-[7rem] pr-16",
          "lg:ml-0 lg:rounded-l-[8rem]",
        )}
      >
        <h2 className={clsx(rozhaOne.className, "text-7xl tracking-wide")}>
          Stronger <br /> Than Steel
        </h2>
        <p className="mb-8 mt-4 text-xl font-light">
          Strong and reliable <br /> for every home project.
        </p>
        <div>
          <button
            className={clsx(
              "relative rounded-full border-2 border-black-1 bg-green-1 px-8 py-2 text-green-3 shadow-btn-1 transition-all",
              "hover:bg-green-1-hover hover:text-black-1 hover:shadow-btn-2",
            )}
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
