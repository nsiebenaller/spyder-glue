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
    <div className="flex max-w-[600px] gap-8 rounded-3xl bg-black-2 p-8">
      <div>
        <Image
          src="/product-1.png"
          alt="SpyderGlue Product"
          width={200}
          height={200}
        />
      </div>
      <div className="flex h-full flex-1 flex-col gap-4 text-cream">
        <h3
          className={clsx(
            rozhaOne.className,
            "text-left text-5xl tracking-wide",
            "text-cream",
          )}
        >
          {name}
        </h3>
        <p className="font-light">{description}</p>
        <Price amount={price} />
        <div className="flex h-full flex-row-reverse">
          <div className="flex flex-col-reverse">
            <Button>Buy Now</Button>
          </div>
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
