import React from "react";
import clsx from "clsx";
import Frame from "./Frame";
import { H2 } from "./common/typography";
import ourStoryIMG from "@/public/our-story.jpg";
import Image from "next/image";

const content =
  `The two us are so excited to be launching our new adhesive into the
        market place! We have been involved in the adhesive industry for a
        combined +90 years. Throughout those years, we have formulated and
        consulted formulators producing many products that are sold by large
        companies under many well-known brands. That said, we believe we could
        improve product performance and ease of use. That is why we have
        developed and tested our own brand, Spyder Glue™️. Spyder Glue™️ ECO is
        an industrial strength polyurethane adhesive that we feel addresses
        short comings and is different than products currently on the market. It
        is important to note that Spyder Glue™️ ECO is largely based on a
        renewable, plant based product. There is no sacrifice to performance for
        this - THE PLANT BASED PRODUCT IS STRONGER THAN THE PETROLEUM
        ALTERNATIVE. Spyder Glue™️ ECO is easy to use and ideal for hobby
        crafting, wood projects, ceramic repairs, concrete block work, and do it
        yourself jobs around the house. It is equal or greater strength when
        compared to products used by furniture manufacturers. So, why did we do
        this when we are up against big name brands: we are able to offer a
        renewable product - it is stronger, more user friendly without foaming
        and has storage stability. We hope you approve of the differences and
        create many projects with Spyder Glue™️. Please review our website and
        use Spyder Glue™️ safely. Let us know what you think of our product.
        Feel free to use the web page to contact us.`.replaceAll(
    "™️",
    `<b class="tm"></b>`,
  );

const OurStory = () => {
  return (
    <section
      id="our-story"
      className={clsx("z-10 mt-20 w-full border-t border-black-2 bg-black-1")}
    >
      <div
        className={clsx(
          "m-auto grid max-w-[1500px] grid-cols-1 gap-16 py-10",
          "lg:grid-cols-2 lg:py-32",
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
      <p
        className="mb-8 mt-4 text-xl font-light"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

const OurStoryImage = () => {
  return (
    <div className="flex items-center justify-center">
      <Frame>
        <Image
          className="z-10"
          src={ourStoryIMG}
          alt="Our Story"
          width={600}
          height={600}
        />
      </Frame>
    </div>
  );
};
