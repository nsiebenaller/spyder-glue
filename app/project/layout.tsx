import Icon from "@/components/Icon";
import Link from "next/link";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <section className="my-8 w-full max-w-lg">
        <div className="my-4 inline-flex items-center gap-1 text-white">
          <Icon icon="arrow_left_alt" />
          <Link href="/projects" className="font-light hover:underline">
            Back to projects
          </Link>
        </div>
        {children}
      </section>
    </main>
  );
}
