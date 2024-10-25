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
        The two us are so excited to be launching our new adhesive into the
        market place! We have been involved in the adhesive industry for a
        combined +90 years. Throughout those years, we have formulated and
        consulted formulators producing many products that are sold by large
        companies under many well-known brands. That said, we believe we could
        improve product performance and ease of use. That is why we have
        developed and tested our own brand, Spyder Glue™️. Spyder Glue™️ is an
        industrial strength polyurethane adhesive that we feel addresses short
        comings and is different than products currently on the market. We hope
        you approve of the differences and create many projects with Spyder
        Glue™️. Please review our website and use Spyder Glue™️ safely. Let us
        know what you think of our product. Feel free to use the web page to
        contact us.
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
