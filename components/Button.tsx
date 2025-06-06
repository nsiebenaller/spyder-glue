import React from "react";
import cn from "@/lib/cn";

const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button
      className={cn(
        "relative rounded-full border-2 border-green-2 bg-transparent px-8 py-2 text-cream shadow-btn-1 transition-all",
        "hover:bg-gray-50 hover:bg-opacity-15 hover:text-cream hover:shadow-btn-2",
      )}
    >
      {children}
    </button>
  );
};

export default Button;
