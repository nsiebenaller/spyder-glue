import { H2 } from "@/components/common/typography";
import Link from "next/link";
import Image from "next/image";
import productIMG from "@/public/product-2.png";
import { getBlogPosts } from "@/lib/shopify";
import { publicURL } from "@/lib/publicURL";

export default async function ProjectsPage() {
  const blogPosts = await getBlogPosts();

  if (!blogPosts.data) {
    return (
      <section>
        <H2 className="mb-10 text-cream">Projects</H2>
        <p>An error has occurred</p>
      </section>
    );
  }

  return (
    <section>
      <H2 className="mb-10 text-cream">Projects</H2>
      <div className="flex flex-col gap-6">
        {blogPosts.data.articles.nodes.map((blogPost) => {
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
