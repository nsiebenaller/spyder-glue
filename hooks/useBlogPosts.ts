import { useQuery } from "@tanstack/react-query";
import { getBlogPosts } from "@/lib/shopify";

export default function useBlogPosts() {
  return useQuery({
    queryKey: ["blogPosts"],
    queryFn: () => getBlogPosts(),
  });
}
