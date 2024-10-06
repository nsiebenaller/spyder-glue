export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <div className="my-8 w-full max-w-lg">{children}</div>
    </main>
  );
}
