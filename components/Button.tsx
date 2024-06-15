import React from "react";
import clsx from "clsx";

const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button
      className={clsx(
        "relative rounded-full border-2 border-black-1 bg-green-1 px-8 py-2 text-green-3 shadow-btn-1 transition-all",
        "hover:bg-green-1-hover hover:text-black-1 hover:shadow-btn-2",
      )}
    >
      {children}
    </button>
  );
};

export default Button;
