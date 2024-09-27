import React from "react";
import { H2 } from "@/components/common/typography";
import { Project } from "@/types/project";

const ProjectPost: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <section className="w-[800px]">
      <H2 className="mb-10 mt-4 text-center text-cream">{project.title}</H2>
    </section>
  );
};

export default ProjectPost;
