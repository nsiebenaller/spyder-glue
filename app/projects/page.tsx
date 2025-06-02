"use client";
import { H2 } from "@/components/common/typography";
import Link from "next/link";
import Image from "next/image";
import productIMG from "@/public/product-2.png";
import { publicURL } from "@/lib/publicURL";
import useBlogPosts from "@/hooks/useBlogPosts";

export default function ProjectsPage() {
  const blogPosts = useBlogPosts();

  if (blogPosts.status === "error") {
    return (
      <section className="text-white">
        <p>An error has occurred</p>
      </section>
    );
  }

  if (blogPosts.status === "pending") {
    return (
      <section>
        <p className="text-white">loading...</p>
      </section>
    );
  }

  const posts = blogPosts.data.data?.articles.nodes || [];

  return (
    <section>
      <H2 className="mb-10 text-cream">Projects</H2>
      <div className="flex flex-col gap-6">
        {posts.map((blogPost) => {
          return (
            <Link
              key={blogPost.id}
              href={publicURL(`/project?h=${blogPost.handle}`)}
            >
              <div className="grid grid-cols-[min-content_1fr] items-center gap-x-4 rounded-xl border border-transparent hover:border-cream">
                <div className="flex h-[100px] w-[100px] justify-center rounded-xl bg-cream">
                  <Image
                    src={blogPost.image?.url || productIMG}
                    alt={blogPost.image?.altText || blogPost.title}
                    width={75}
                    height={75}
                  />
                </div>
                <h3 className="text-2xl text-cream">{blogPost.title}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
