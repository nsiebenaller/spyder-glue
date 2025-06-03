"use client";
import React from "react";
import cn from "@/lib/cn";
import { MaterialSymbol } from "material-symbols";

const Icon: React.FC<{
  icon: MaterialSymbol;
  className?: string;
  onClick?: () => void;
}> = ({ icon, className, onClick }) => {
  return (
    <span
      className={cn("material-symbols-rounded", className)}
      onClick={() => onClick?.()}
    >
      {icon}
    </span>
  );
};
Icon.displayName = "Icon";

export default Icon;
