import React from "react";
import clsx from "clsx";
import { rozhaOne } from "@/styles/fonts";
import Resource from "./Resource";

const Resources = () => {
  return (
    <section className="z-10 flex w-full flex-col gap-4 bg-black-1 py-16">
      <h2
        className={clsx(
          rozhaOne.className,
          "text-center text-7xl tracking-wide",
          "text-cream",
        )}
      >
        Resources
      </h2>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 flex-wrap place-items-center gap-4 px-8 md:grid-cols-2 lg:grid-cols-3">
        <Resource />
        <Resource />
        <Resource />
        <Resource />
      </div>
    </section>
  );
};

export default Resources;
