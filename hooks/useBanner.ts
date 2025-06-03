import { useQuery } from "@tanstack/react-query";
import { getBanner } from "@/lib/shopify";

export default function useBanner() {
  return useQuery({
    queryKey: ["banner"],
    queryFn: () => getBanner(),
  });
}
