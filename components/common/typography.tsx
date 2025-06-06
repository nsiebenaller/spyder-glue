import React, { forwardRef } from "react";
import cn from "@/lib/cn";
import fonts from "@/styles/fonts";

export const H2 = forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h2
      ref={ref}
      className={cn(
        fonts.rozhaOne,
        "whitespace-nowrap text-[84px] leading-none tracking-wide",
        "md:text-[92px]",
        className,
      )}
      {...props}
    />
  );
});
H2.displayName = "H2";

export const H3 = forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={cn(fonts.hind, "text-3xl tracking-wide text-cream", className)}
      {...props}
    />
  );
});
H3.displayName = "H3";
