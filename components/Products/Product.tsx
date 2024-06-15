import { rozhaOne } from "@/styles/fonts";
import clsx from "clsx";
import React from "react";

const Product: React.FC<{
  name: string;
  description: string;
  price: number;
}> = ({ name, description, price }) => {
  const fixedPrice = price.toFixed(2);
  const [dollars, cents] = fixedPrice.split(".");
  return (
    <div className="grid grid-cols-2 rounded-3xl bg-black-2 p-8">
      <div className="flex h-[300px] w-[200px] items-center justify-center bg-green-3">
        PRODUCT IMAGE
      </div>
      <div className="text-cream">
        <h3
          className={clsx(
            rozhaOne.className,
            "text-center text-7xl tracking-wide",
            "text-cream",
          )}
        >
          {name}
        </h3>
        <p>{description}</p>
        <div className="flex flex-nowrap">
          <span className="top-[-4px] line-clamp-1 text-xs">$</span>
          <span>{dollars}</span>
          <span className="top-[-4px] line-clamp-1 text-xs">{cents}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
