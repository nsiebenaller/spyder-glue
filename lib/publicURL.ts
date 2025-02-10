import { IS_GITHUB_PAGES } from "./env";

const PREFIX = "spyder-glue";

/** Formats a URL depending on the environment the app is running in. */
export function publicURL(url: string): string {
  if (IS_GITHUB_PAGES) {
    return `/${[PREFIX, ...url.split("/").filter(Boolean)].join("/")}`;
  }
  return url;
}
