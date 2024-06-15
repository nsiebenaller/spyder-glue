import React from "react";
import clsx from "clsx";
import { rozhaOne } from "@/styles/fonts";
import Product from "./Product";

const Products = () => {
  return (
    <section className="py-20">
      <div className="flex w-full flex-col justify-center gap-4">
        <h2
          className={clsx(
            rozhaOne.className,
            "text-center text-7xl tracking-wide",
            "text-cream",
          )}
        >
          Products
        </h2>
        <div className="grid grid-cols-2 gap-6 px-8">
          <Product
            name="Spyder Glue"
            description="Our original formula"
            price={4.49}
          />
          <Product
            name="Eco Spyder Glue"
            description="Our eco-friendly formula"
            price={4.89}
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
