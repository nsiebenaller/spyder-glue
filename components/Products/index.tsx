import React from "react";
import Product from "./Product";
import { H2 } from "../common/typography";

const Products = () => {
  return (
    <section id="shop" className="z-10 border-t border-black-2 bg-black-1">
      <div className="m-auto flex w-full max-w-[1500px] flex-col justify-center gap-4 px-16 py-20">
        <H2 className="px-8 text-cream">Shop</H2>
        <div className="block w-full">
          <Product productId={"9065137242343"} />
        </div>
      </div>
    </section>
  );
};

export default Products;
