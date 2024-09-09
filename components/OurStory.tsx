import React from "react";
import clsx from "clsx";
import Frame from "./Frame";
import { H2 } from "./common/typography";

const OurStory = () => {
  return (
    <section id="our-story" className={clsx("z-10 w-full pt-20")}>
      <div
        className={clsx(
          "grid grid-cols-1 gap-16 border-t border-black-2 bg-black-1 py-10 lg:grid-cols-2",
          "lg:py-32",
        )}
      >
        <OurStoryContent />
        <OurStoryImage />
      </div>
    </section>
  );
};

export default OurStory;

const OurStoryContent = () => {
  return (
    <div
      className={clsx(
        "flex flex-col rounded-r-3xl px-16 text-cream",
        "lg:mr-0 lg:rounded-r-[8rem]",
      )}
    >
      <H2>Our Story</H2>
      <p className="mb-8 mt-4 text-xl font-light">
        USING POLYURETHANE GLUES, PRESENTLY IN THE MARKET, FOR PROJECTS ID
        DISATISFYING. THE GLUES FOAM, RESULTING IN VOIDS AND AIR POCKETS
        WEAKENING THE PRODUCTS PERFORMANCE, MAKING JOINTS UNSIGHTLY AND
        DIFFICULT TO FINISH. ONCE THE PLASTIC BOTTLE IS OPENED, THE GLUE SPOILS
        IN A SHORT TIME AND IS OF NO USE. SPYDER GLUE™️, DEVELOPED OVER A NUMBER
        OF YEARS, COMBATS THESE SHORTCOMINGS. BUBBLING IS MINIMIZED. STORING
        SPYDER GLUE™️ ACCORDING TO INSTRUCTIONS ALLOWS QUALITY TO BE MAINTAINED
        FOR YEARS. VERY IMPORTANT FOR EVERYONE: A MAJOR COMPONENT OF SPYDER
        GLUE™️ IS RENEWABLE, PLANT BASED - THEREFORE, THE GREEN PORTION OF OUR
        LOGO.
      </p>
    </div>
  );
};

const OurStoryImage = () => {
  return (
    <div className="flex items-center justify-center">
      <Frame>
        <div className="flex h-[400px] w-[400px] items-center justify-center bg-cream">
          PERSON IMAGE
        </div>
      </Frame>
    </div>
  );
};
