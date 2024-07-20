import React from "react";
import fonts from "@/styles/fonts";
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
          id="our-story"
          className={clsx(
            fonts.rozhaOne,
            "text-4xl tracking-wide",
            "md:text-7xl",
          )}
        >
          Our Story
        </h2>
        <p className="mb-8 mt-4 text-xl font-light">
          USING POLYURETHANE GLUES, PRESENTLY IN THE MARKET, FOR PROJECTS ID
          DISATISFYING. THE GLUES FOAM, RESULTING IN VOIDS AND AIR POCKETS
          WEAKENING THE PRODUCTS PERFORMANCE, MAKING JOINTS UNSIGHTLY AND
          DIFFICULT TO FINISH. ONCE THE PLASTIC BOTTLE IS OPENED, THE GLUE
          SPOILS IN A SHORT TIME AND IS OF NO USE. SPYDER GLUE™️, DEVELOPED OVER
          A NUMBER OF YEARS, COMBATS THESE SHORTCOMINGS. BUBBLING IS MINIMIZED.
          STORING SPYDER GLUE™️ ACCORDING TO INSTRUCTIONS ALLOWS QUALITY TO BE
          MAINTAINED FOR YEARS. VERY IMPORTANT FOR EVERYONE: A MAJOR COMPONENT
          OF SPYDER GLUE™️ IS RENEWABLE, PLANT BASED - THEREFORE, THE GREEN
          PORTION OF OUR LOGO.
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
