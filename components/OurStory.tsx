"use client";
import React from "react";
import cn from "@/lib/cn";
import Frame from "./Frame";
import { H2 } from "./common/typography";
import Image from "next/image";
import useOurStory from "@/hooks/useOurStory";

const OurStory = () => {
  const { isLoading, data } = useOurStory();

  if (isLoading || !data) {
    return (
      <section
        id="our-story"
        className={cn(
          "z-10 mt-20 h-[800px] w-full border-t border-black-2 bg-black-1",
        )}
      ></section>
    );
  }

  console.log("Loaded Our Story Data:", data);
  return (
    <section
      id="our-story"
      className={cn("z-10 mt-20 w-full border-t border-black-2 bg-black-1")}
    >
      <div
        className={cn(
          "m-auto grid max-w-[1500px] grid-cols-1 gap-16 py-10",
          "lg:grid-cols-2 lg:py-32",
        )}
      >
        <OurStoryContent
          content={data.data?.blog.articleByHandle.contentHtml || ""}
        />
        <OurStoryImage src={data.data?.blog.articleByHandle.image?.url || ""} />
      </div>
    </section>
  );
};

export default OurStory;

const OurStoryContent = ({ content }: { content: string }) => {
  return (
    <div
      className={cn(
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

const OurStoryImage = ({ src }: { src: string }) => {
  return (
    <div className="flex items-center justify-center">
      <Frame>
        <Image
          className="z-10"
          src={src}
          alt="Our Story"
          width={600}
          height={600}
        />
      </Frame>
    </div>
  );
};
