import React from "react";
import fonts from "@/styles/fonts";
import clsx from "clsx";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className={clsx(
        "z-10 grid w-full grid-cols-1 gap-16 pt-40",
        "lg:grid-cols-2",
      )}
    >
      <div className="flex items-center justify-center">
        <Image
          src="/product-1.png"
          alt="SpyderGlue Product"
          width={400}
          height={400}
        />
      </div>
      <div
        className={
          clsx("flex flex-col text-cream")
          // "border-b-4 border-l-4 border-t-4 border-black-0",
          // "ml-16 flex flex-col rounded-l-3xl bg-cream py-[6rem] pl-[7rem] pr-16",
          // "lg:ml-0 lg:rounded-l-[8rem]",
        }
      >
        <h2
          className={clsx(
            fonts.rozhaOne,
            "",
            "drop-shadow-wh leading-none drop-shadow-lg md:text-[92px]",
          )}
        >
          Stronger <br /> Than Steel
        </h2>
        <p className="mb-8 mt-4 text-xl font-light">
          Strong and reliable <br /> for every home project.
        </p>
        <div>
          <Button>Shop Now</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
