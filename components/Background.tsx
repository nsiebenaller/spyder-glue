import React from "react";
import clsx from "clsx";
import { publicURL } from "@/lib/publicURL";

const Background = () => {
  return (
    <>
      <div className="fixed left-0 top-0 z-0 h-full w-full bg-gradient-to-b from-black-0 to-black-2" />
      <div
        style={{ backgroundImage: `url('${publicURL("/bg.png")}')` }}
        className={clsx("fixed top-0 z-0 h-full w-full bg-cover bg-no-repeat")}
      />
    </>
  );
};

export default Background;
