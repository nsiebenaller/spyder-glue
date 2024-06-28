import React from "react";
import { rozhaOne } from "@/styles/fonts";
import clsx from "clsx";
import Frame from "./Frame";

const OurStory = () => {
  return (
    <section
      className={clsx(
        "z-10 grid w-full grid-cols-1 gap-16 pt-20",
        "lg:grid-cols-2",
      )}
    >
      <div
        className={clsx(
          "border-b-4 border-r-4 border-t-4 border-black-0",
          "mr-16 flex flex-col rounded-r-3xl bg-cream py-[6rem] pl-16 pr-[7rem]",
          "lg:mr-0 lg:rounded-r-[8rem]",
        )}
      >
        <h2
          className={clsx(
            rozhaOne.className,
            "text-4xl tracking-wide",
            "md:text-7xl",
          )}
        >
          Our Story
        </h2>
        <p className="mb-8 mt-4 text-xl font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          sit amet blandit ante. Pellentesque ut imperdiet tellus. Aliquam erat
          volutpat. Nullam lorem tortor, faucibus sed mi sit amet, gravida
          lobortis ante. Sed nec tempus dui, vitae ullamcorper lorem. Maecenas
          vitae vulputate dolor, id vestibulum tellus. Duis suscipit varius diam
          pretium efficitur. Curabitur quis risus odio. Nulla facilisi. Donec
          sapien risus, elementum nec sodales ut, congue in nisl.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Frame>
          <div className="flex h-[400px] w-[400px] items-center justify-center rounded-2xl bg-green-2">
            PERSON IMAGE
          </div>
        </Frame>
      </div>
    </section>
  );
};

export default OurStory;
