import { H2 } from "@/components/common/typography";
import Frame from "@/components/Frame";
import projectsJSON from "@/data/projects.json";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="mb-20 mt-32 flex justify-center">
      <section className="w-[800px]">
        <H2 className="mb-10 text-cream">Projects</H2>
        <div className="flex flex-col gap-6">
          {projectsJSON.projects.map((project, idx) => {
            return (
              <Link
                key={`${project.title}-${idx}`}
                href={`/projects/${project.slug}`}
              >
                <div className="grid grid-cols-[min-content_1fr] gap-x-4">
                  <div className="flex items-center justify-center">
                    <Frame>
                      <div className="flex h-[100px] w-[100px] items-center justify-center bg-cream"></div>
                    </Frame>
                  </div>
                  <h3 className="text-cream">{project.title}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
