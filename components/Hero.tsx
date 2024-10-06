"use client";
import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Button from "./Button";
import { H2 } from "./common/typography";
import productIMG from "@/public/product-1.png";
import useInterval from "@/hooks/useInterval";

const Hero = () => {
  return (
    <section
      className={clsx(
        "z-10 grid w-full grid-cols-1 gap-16 pt-20",
        "lg:grid-cols-2",
      )}
    >
      <HeroImage />
      <HeroContent />
    </section>
  );
};

export default Hero;

const HeroImage = () => {
  return (
    <div className="relative flex items-center justify-center">
      <Image
        className="z-10"
        src={productIMG}
        alt="SpyderGlue Product"
        width={400}
        height={400}
      />
      <div className="absolute left-0 top-0 z-0 flex h-full w-full items-center justify-center">
        <div className="h-[80%] max-h-[300px] w-[80%] max-w-[500px] rotate-45 rounded-full bg-green-4" />
      </div>
    </div>
  );
};

type SwapContent = {
  title: React.ReactNode;
  subtitle: React.ReactNode;
};

const SwappableContent: SwapContent[] = [
  {
    title: (
      <>
        Stronger <br /> Than Steel
      </>
    ),
    subtitle: (
      <>
        Strong and reliable <br /> for every home project.
      </>
    ),
  },
  {
    title: (
      <>
        Smoother <br /> Than Silk
      </>
    ),
    subtitle: (
      <>
        Smooth application <br /> every time.
      </>
    ),
  },
];

const HeroContent = () => {
  const content = useInterval(SwappableContent, { interval: 3000 });

  return (
    <div className={clsx("flex max-w-[600px] flex-col px-8 text-cream")}>
      <H2>{content.title}</H2>
      <p className="mb-8 mt-4 text-xl font-light">{content.subtitle}</p>
      <div>
        <Button>Shop Now</Button>
      </div>
    </div>
  );
};
