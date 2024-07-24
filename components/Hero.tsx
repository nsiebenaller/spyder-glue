"use client";
import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Button from "./Button";
import { H2 } from "./text";
import productIMG from "@/public/product-1.png";

const Hero = () => {
  return (
    <section
      className={clsx(
        "z-10 grid w-full grid-cols-1 gap-16 pt-40",
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
        <div className="bg-green-4 h-[80%] max-h-[300px] w-[80%] max-w-[500px] rotate-45 rounded-full" />
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
  const [index, setIndex] = React.useState<number>(0);
  const indexRef = React.useRef<number>(index);
  indexRef.current = index;

  React.useEffect(() => {
    const interval = setInterval(() => {
      const currIndex = indexRef.current;
      if (currIndex >= SwappableContent.length - 1) {
        setIndex(0);
        return;
      }
      const nextIndex = currIndex + 1;
      setIndex(nextIndex);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const content = SwappableContent[index];

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
