import React from "react";
import projectsJSON from "@/data/projects.json";
import { H2 } from "@/components/common/typography";
import ProjectPost from "@/components/ProjectPost";
import { projectSchema } from "@/types/project";

type ProjectPageProps = {
  params: { slug: string };
};
export default function ProjectPage({ params: { slug } }: ProjectPageProps) {
  const project = React.useMemo(() => {
    const p = projectsJSON.projects.find((p) => p.slug === slug);
    if (!p) return;
    return projectSchema.parse(p);
  }, [slug]);

  if (!project) {
    return (
      <main className="mb-20 mt-32 flex justify-center">
        <H2 className="mb-10 text-cream">Not Found!</H2>
      </main>
    );
  }
  return (
    <main className="mb-20 mt-32 flex justify-center">
      <ProjectPost project={project} />
    </main>
  );
}

export function generateStaticParams() {
  return projectsJSON.projects.map(({ slug }) => ({ slug }));
}
