import { useQuery } from "@tanstack/react-query";
import { getOurStory } from "@/lib/shopify";

export default function useOurStory() {
  return useQuery({
    queryKey: ["ourStory"],
    queryFn: () => getOurStory(),
  });
}
