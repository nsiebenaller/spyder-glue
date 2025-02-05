import React from "react";
import { BlogPost, getBlogPosts } from "@/lib/shopify";
import { ClientResponse } from "@shopify/storefront-api-client";

type State =
  | { status: "loading" }
  | { status: "error"; message: string }
  | {
      status: "success";
      data: ClientResponse<{
        articles: {
          nodes: BlogPost[];
        };
      }>;
    };

export default function useBlogPosts() {
  const [response, setResponse] = React.useState<State>({ status: "loading" });

  React.useEffect(() => {
    getBlogPosts()
      .then((data) => {
        setResponse({ status: "success", data });
      })
      .catch((err) => {
        console.error(err);
        setResponse({ status: "error", message: "Unable to load blog posts." });
      });
  }, []);

  return response;
}
