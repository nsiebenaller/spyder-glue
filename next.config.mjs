const isGithubPages = Boolean(process.env.GITHUB_PAGES);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  pageExtensions: ["ts", "tsx", "mdx"],
  basePath: isGithubPages ? "/spyder-glue" : undefined,
  assetPrefix: isGithubPages ? "/spyder-glue" : undefined,
  trailingSlash: true,
};

export default nextConfig;
