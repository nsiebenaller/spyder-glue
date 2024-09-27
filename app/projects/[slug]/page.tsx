import React from "react";
import projectsJSON from "@/data/projects.json";
import { H2 } from "@/components/common/typography";
import ProjectPost from "@/components/ProjectPost";

type ProjectPageProps = {
  params: { slug: string };
};
export default function ProjectPage({ params: { slug } }: ProjectPageProps) {
  const project = React.useMemo(() => {
    return projectsJSON.find((p) => p.slug === slug);
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
  return projectsJSON.map(({ slug }) => ({ slug }));
}
