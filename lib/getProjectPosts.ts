import fs from "fs";
import path from "path";
import { ProjectPost } from "@/types/projectPost";

const PROJECT_DIR = path.join(process.cwd(), "app/project");

/** Get all project posts in the `/app/project/*` directory as MDX files. */
export function getProjectPosts(): ProjectPost[] {
  const fileNames = fs.readdirSync(PROJECT_DIR, {
    recursive: true,
    encoding: "utf-8",
  });
  const projectPaths = fileNames
    .filter((fileName) => {
      // Only return MDX paths
      if (fileName.endsWith("page.mdx")) return true;
      return false;
    })
    .map<ProjectPost>((filePath) => {
      // Remove `/page.mdx` and format path
      const postPath = filePath.replace("/page.mdx", "");
      const path = `/project/${postPath}`;

      // Format title
      const words = postPath.split("-");
      const title = words
        .map((word) => word[0].toUpperCase() + word.substring(1))
        .join(" ");

      return {
        title,
        path,
      };
    });
  return projectPaths;
}
