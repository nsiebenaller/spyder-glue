"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import useBlogPost from "@/hooks/useBlogPost";

function ProjectPage() {
  const searchParams = useSearchParams();
  const handle = searchParams.get("h");

  const blogPost = useBlogPost(String(handle));

  if (blogPost.status === "error") {
    return (
      <section className="text-white">
        <p>An error has occurred</p>
      </section>
    );
  }

  if (blogPost.status === "loading") {
    return (
      <section>
        <p className="text-white">loading...</p>
      </section>
    );
  }

  const markdown = blogPost.data.replaceAll("™️", `<b class="tm"></b>`);
  return (
    <div className="text-white">
      <Markdown
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
              {children}
            </h1>
          ),
          p: ({ children }) => (
            <p className="my-4 font-light leading-7">{children}</p>
          ),
          span: ({ children }) => (
            <span className="my-4 font-light leading-7">{children}</span>
          ),
        }}
      >
        {markdown}
      </Markdown>
    </div>
  );
}

export default function ProjectPageWrapper() {
  return (
    <Suspense fallback="loading...">
      <ProjectPage />
    </Suspense>
  );
}
