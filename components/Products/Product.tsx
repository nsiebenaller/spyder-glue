import Image, { StaticImageData } from "next/image";
import React from "react";
import Button from "../Button";
import Link from "next/link";
import { H3 } from "../common/typography";
import clsx from "clsx";

const Product: React.FC<{
  name: string;
  description: string;
  price: number;
  image: StaticImageData;
  href: string;
}> = ({ name, description, price, image, href }) => {
  return (
    <div
      className={clsx(
        "grid h-full w-full max-w-[800px] grid-cols-1 grid-rows-[min-content_min-content] justify-between gap-8 p-8",
        "sm:grid-cols-2",
      )}
    >
      <ProductImage image={image} />
      <div className="grid h-full grid-rows-[min-content] flex-col text-cream">
        <H3>{name}</H3>
        <hr className="my-4 max-w-24 border-gray-700" />
        <p className="font-light">{description}</p>
        <hr className="my-4 max-w-24 border-gray-700" />
        <div className="flex items-center gap-16">
          <Price amount={price} />
          <Link href={href}>
            <Button>Buy Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;

const ProductImage: React.FC<{ image: StaticImageData }> = ({ image }) => {
  return (
    <div className="relative h-[300px] w-[300px] overflow-hidden rounded-lg">
      <Image
        src={image}
        alt="SpyderGlue Product"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

const Price: React.FC<{ amount: number }> = ({ amount }) => {
  return <div className="whitespace-nowrap text-2xl">${amount}</div>;
};
