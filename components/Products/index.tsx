import React from "react";
import clsx from "clsx";
import fonts from "@/styles/fonts";
import Product from "./Product";
import product1PNG from "@/public/product-1.png";

const Products = () => {
  return (
    <section className="z-10 pt-20">
      <div className="flex w-full flex-col justify-center gap-4 border-t border-black-2 bg-black-1 py-10">
        <h2
          id="products"
          className={clsx(
            fonts.rozhaOne,
            "text-center text-4xl tracking-wide text-cream",
            "md:text-7xl",
          )}
        >
          Products
        </h2>
        <div
          className={clsx(
            "grid grid-cols-1 items-center justify-items-center gap-6 px-8",
            "lg:grid-cols-2",
          )}
        >
          <Product
            name="Spyder Glue"
            description="Our original formula"
            price={4.49}
            image={product1PNG}
            href="/"
          />
          <Product
            name="Eco Spyder Glue"
            description="Our eco-friendly formula"
            price={4.89}
            image={product1PNG}
            href="/"
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
