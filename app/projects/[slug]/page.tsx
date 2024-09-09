import React from "react";
import projectsJSON from "@/data/projects.json";
import { H2 } from "@/components/common/typography";
import Link from "next/link";

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
      <section className="w-[800px]">
        <H2 className="mb-10 mt-4 text-center text-cream">{project.title}</H2>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return projectsJSON.map(({ slug }) => ({ slug }));
}
