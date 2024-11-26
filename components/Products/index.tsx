import React from "react";
import Product from "./Product";
import productIMG from "@/public/can_1-bg.png";
import { H2 } from "../common/typography";

const Products = () => {
  return (
    <section id="shop" className="z-10">
      <div className="flex w-full flex-col justify-center gap-4 border-t border-black-2 bg-black-1 px-16 py-20">
        <H2 className="px-8 text-cream">Shop</H2>
        <div className="flex justify-center">
          <Product
            name="Eco Spyder Glue"
            description="Experience the ultimate in eco-friendly adhesion with SpyderGlue Eco All-Purpose Glue! Crafted with sustainability in mind, SpyderGlue Eco delivers a robust, fast-drying bond on a variety of surfaces including wood, metal, plastic, ceramics, and more. Perfect for home repairs, crafting, and professional projects, SpyderGlue Eco ensures your materials stay firmly in place while minimizing environmental impact."
            image={productIMG}
            productId={"9061855428839"}
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
