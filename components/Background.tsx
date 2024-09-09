import React from "react";
import clsx from "clsx";

const Background = () => {
  return (
    <>
      <div className="fixed left-0 top-0 z-0 h-full w-full bg-gradient-to-b from-black-0 to-black-2" />
      <div
        className={clsx(
          process.env.NODE_ENV === "production"
            ? "bg-[url('/spyder-glue/bg.png')]"
            : "bg-[url('/bg.png')]",
          "fixed top-0 z-0 h-full w-full bg-cover bg-no-repeat",
        )}
      />
    </>
  );
};

export default Background;
