import React from "react";
import clsx from "clsx";

const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button
      className={clsx(
        "bg-transparent relative rounded-full border-2 border-green-1 px-8 py-2 text-cream shadow-btn-1 transition-all",
        "hover:bg-gray-50 hover:bg-opacity-15 hover:text-cream hover:shadow-btn-2",
      )}
    >
      {children}
    </button>
  );
};

export default Button;
