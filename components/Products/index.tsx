import React from "react";
import clsx from "clsx";
import Product from "./Product";
import productIMG from "@/public/can_1-bg.png";
import { H2 } from "../text";

const Products = () => {
  return (
    <section id="products" className="z-10">
      <div className="flex w-full flex-col justify-center gap-4 border-t border-black-2 bg-black-1 px-16 py-20">
        <H2 className="px-8 text-cream">Shop All</H2>
        <div
          className={clsx(
            "grid grid-cols-1 items-center justify-items-center gap-6 px-8",
            "lg:grid-cols-2",
          )}
        >
          <Product
            name="Spyder Glue"
            description="Experience the ultimate in adhesion with SpyderGlue All-Purpose Glue! Designed for versatility and strength, SpyderGlue delivers a robust, fast-drying bond on an array of surfaces including wood, metal, plastic, ceramics, and more. Perfect for home repairs, crafting, and professional projects, SpyderGlue ensures your materials stay firmly in place with its superior strength and fast-drying formula."
            price={4.49}
            image={productIMG}
            href="/"
          />
          <Product
            name="Eco Spyder Glue"
            description="Experience the ultimate in eco-friendly adhesion with SpyderGlue Eco All-Purpose Glue! Crafted with sustainability in mind, SpyderGlue Eco delivers a robust, fast-drying bond on a variety of surfaces including wood, metal, plastic, ceramics, and more. Perfect for home repairs, crafting, and professional projects, SpyderGlue Eco ensures your materials stay firmly in place while minimizing environmental impact."
            price={4.89}
            image={productIMG}
            href="/"
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
