"use client";
import React from "react";
import clsx from "clsx";
import { MaterialSymbol } from "material-symbols";

const Icon: React.FC<{
  icon: MaterialSymbol;
  className?: string;
  onClick?: () => void;
}> = ({ icon, className, onClick }) => {
  return (
    <span
      className={clsx("material-symbols-rounded", className)}
      onClick={() => onClick?.()}
    >
      {icon}
    </span>
  );
};
Icon.displayName = "Icon";

export default Icon;
