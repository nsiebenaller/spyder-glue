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

  return (
    <Markdown
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: ({ children }) => (
          <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
            {children}
          </h1>
        ),
        p: ({ children }) => (
          <p className="my-4 font-light leading-7 text-white">{children}</p>
        ),
        span: ({ children }) => (
          <span className="my-4 font-light leading-7 text-white">
            {children}
          </span>
        ),
      }}
    >
      {blogPost.data}
    </Markdown>
  );
}

export default function ProjectPageWrapper() {
  return (
    <Suspense fallback="loading...">
      <ProjectPage />
    </Suspense>
  );
}
