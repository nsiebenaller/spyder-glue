import React from "react";
import cn from "@/lib/cn";
import fonts from "@/styles/fonts";
import Icon from "../Icon";
import Link from "next/link";

const Resources = () => {
  return (
    <section
      id="resources"
      className={cn(
        "z-10 flex w-full justify-center bg-black-1 px-6 py-16",
        "sm:px-24",
      )}
    >
      <div
        className={cn(
          "grid w-full max-w-7xl grid-cols-1 gap-4",
          "lg:grid-cols-2",
        )}
      >
        <div>
          <h2 className={cn(fonts.rozhaOne, "text-7xl text-cream")}>
            Resources
          </h2>
          <p className={cn("font-light tracking-wide text-cream")}>
            Explore product documentation and manuals.
          </p>
        </div>
        <div
          className={cn(
            "grid grid-cols-1 gap-1",
            "md:grid-cols-2",
            "lg:grid-cols-1",
            "xl:grid-cols-2",
            "grid-flow-row",
          )}
        >
          <ResourceItem
            variant="document"
            label="Directions For Use"
            href="/documents/directions_for_use_spyder_glue.pdf"
          />
          <ResourceItem
            variant="document"
            label="Safety Documents"
            href="/documents/safety_spyder_glue.pdf"
          />
          <ResourceItem
            variant="document"
            label="Storage and Preserving Spyder Glue"
            href="/documents/storage_and_preserving_spyder_glue.pdf"
          />
          <ResourceItem
            variant="document"
            label="Safety Data Sheet"
            href="/documents/sds_11-11-2024.docx"
          />
        </div>
      </div>
    </section>
  );
};

export default Resources;

const ResourceItem: React.FC<{
  variant: "document";
  label: string;
  href: string;
}> = ({ variant, label, href }) => {
  return (
    <Link href={href} passHref target="_blank">
      <div
        className={cn(
          "group grid h-full w-full max-w-[400px] cursor-pointer grid-cols-[min-content_1fr] gap-2 border border-transparent p-2 text-cream",
          "transition-all hover:border-white",
        )}
      >
        <Icon icon="description" className="text-[72px]" />
        <div>
          <span className="text-xs font-light uppercase tracking-widest">
            {variant}
          </span>
          <h3>{label}</h3>
          <div className="inline-flex rounded-full bg-cream px-4 text-black opacity-0 transition-all group-hover:opacity-100">
            <span className="tracking-tighter">open</span>
            <Icon icon="arrow_right_alt" />
          </div>
        </div>
      </div>
    </Link>
  );
};
