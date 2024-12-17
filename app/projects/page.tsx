import { H2 } from "@/components/common/typography";
import Link from "next/link";
import { getProjectPosts } from "@/lib/getProjectPosts";
import Image from "next/image";
import productIMG from "@/public/product-2.png";

export default function Projects() {
  const projectPosts = getProjectPosts();

  return (
    <section>
      <H2 className="mb-10 text-cream">Projects</H2>
      <div className="flex flex-col gap-6">
        {projectPosts.map((post, idx) => {
          return (
            <Link key={`${post.title}-${idx}`} href={post.path}>
              <div className="grid grid-cols-[min-content_1fr] items-center gap-x-4 rounded-xl border border-transparent hover:border-cream">
                <div className="flex h-[100px] w-[100px] justify-center rounded-xl bg-cream">
                  <Image
                    src={productIMG}
                    alt={`${post.title} post`}
                    width={75}
                    height={75}
                  />
                </div>
                <h3 className="text-2xl text-cream">{post.title}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
