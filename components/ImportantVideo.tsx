import React from "react";
import { H3 } from "./common/typography";

export default function ImportantVideo() {
  return (
    <div className="z-10 flex w-full flex-col items-center justify-center gap-4 bg-black-1 p-4">
      <H3>Important! Please view before using product!</H3>
      <video width="600" controls>
        <source
          src="https://cdn.shopify.com/videos/c/o/v/a159048225a84e08b2e5d5bad1024009.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
