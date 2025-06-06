import useBanner from "@/hooks/useBanner";
import cn from "@/lib/cn";
import React from "react";

export default function TopBanner() {
  const banner = useBanner();
  const bannerContent = banner.data?.data?.blog.articleByHandle.contentHtml;
  const hideBanner = banner.isLoading || !bannerContent;
  return (
    <div
      className={cn(
        "w-full bg-green-2 px-6 py-4 transition-all",
        hideBanner && "h-0 py-0 opacity-0",
      )}
      dangerouslySetInnerHTML={{ __html: bannerContent || "" }}
    />
  );
}
