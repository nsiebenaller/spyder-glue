import { H2 } from "@/components/common/typography";
import Frame from "@/components/Frame";
import Link from "next/link";
import { getProjectPosts } from "@/lib/getProjectPosts";
import Image from "next/image";
import productIMG from "@/public/can_1-bg.png";

export default function Projects() {
  const projectPosts = getProjectPosts();

  return (
    <section>
      <H2 className="mb-10 text-cream">Projects</H2>
      <div className="flex flex-col gap-6">
        {projectPosts.map((post, idx) => {
          return (
            <Link key={`${post.title}-${idx}`} href={post.path}>
              <div className="grid grid-cols-[min-content_1fr] items-center gap-x-4 border border-transparent hover:border-cream">
                <div className="w-[100px] bg-cream">
                  <Image
                    src={productIMG}
                    alt={`${post.title} post`}
                    width={100}
                    height={100}
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
