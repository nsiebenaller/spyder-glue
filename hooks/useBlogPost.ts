import React from "react";
import { getBlogPost } from "@/lib/shopify";

type State =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; data: string };

export default function useBlogPost(handle: string) {
  const [markdown, setMarkdown] = React.useState<State>({ status: "loading" });

  React.useEffect(() => {
    if (!handle) return;
    getBlogPost(handle).then((r) => {
      if (!r.data) {
        setMarkdown({ status: "error", message: "An error has occurred." });
        return;
      }
      const { title, contentHtml } = r.data.blog.articleByHandle;
      setMarkdown({
        status: "success",
        data: `<h1>${title}</h1>${contentHtml}`,
      });
    });
  }, [handle]);

  return markdown;
}
