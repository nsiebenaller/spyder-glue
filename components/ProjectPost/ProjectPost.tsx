import React from "react";
import { H2 } from "@/components/common/typography";
import { Project } from "@/types/project";
import Image from "next/image";
import { publicURL } from "@/lib/publicURL";

const ProjectPost: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <section className="w-[800px]">
      <H2 className="mb-10 mt-4 text-cream">{project.title}</H2>
      {project.items.map((item, idx) => {
        if (item.variant === "image") {
          return (
            <div key={idx}>
              <Image
                src={publicURL(item.src)}
                alt={item.alt}
                width={item.width}
                height={item.height}
              />
            </div>
          );
        } else if (item.variant === "copy") {
          return (
            <div key={idx} className="text-cream">
              {item.copy}
            </div>
          );
        }
        throw new Error(`Unsupported variant: '${(item as any).variant}'`);
      })}
    </section>
  );
};

export default ProjectPost;
