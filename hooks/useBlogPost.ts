import { useQuery } from "@tanstack/react-query";
import { getBlogPost } from "@/lib/shopify";

export default function useBlogPost(handle: string) {
  return useQuery({
    queryKey: ["blogPost", handle],
    queryFn: () => getBlogPost(handle),
    select: (response) => {
      if (!response) throw new Error("No response received");
      const { title, contentHtml } = response.data?.blog.articleByHandle || {};
      return `<h1>${title}</h1>${contentHtml}`;
    },
  });
}
