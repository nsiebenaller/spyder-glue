import { rozhaOne } from "@/styles/fonts";
import Image from "next/image";
import clsx from "clsx";
import React from "react";
import Button from "../Button";

const Product: React.FC<{
  name: string;
  description: string;
  price: number;
}> = ({ name, description, price }) => {
  return (
    <div className="grid h-full w-full max-w-[600px] grid-cols-2 justify-between gap-8 rounded-3xl bg-black-2 p-8">
      <div className="relative h-[200px] w-[200px]">
        <Image
          src="/product-1.png"
          alt="SpyderGlue Product"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="grid h-full grid-rows-[min-content_1fr_min-content] flex-col gap-4 text-cream">
        <h3
          className={clsx(
            rozhaOne.className,
            "text-left text-2xl tracking-wide",
            "md:text-5xl",
            "text-cream",
          )}
        >
          {name}
        </h3>
        <p className="font-light">{description}</p>
        <div className="flex justify-between">
          <Price amount={price} />
          <Button>Buy Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Product;

const Price: React.FC<{ amount: number }> = ({ amount }) => {
  const [dollars, cents] = amount.toFixed(2).split(".");
  return (
    <div className="flex flex-nowrap">
      <span className="top-[-4px] line-clamp-1 text-lg font-light tracking-wide">
        $
      </span>
      <span className="text-3xl tracking-wide">{dollars}</span>
      <span className="top-[-4px] line-clamp-1 text-lg font-light tracking-wide">
        {cents}
      </span>
    </div>
  );
};
