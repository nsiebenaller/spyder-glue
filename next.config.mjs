const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  pageExtensions: ["ts", "tsx", "mdx"],
  basePath: isProd ? "/spyder-glue" : undefined,
  assetPrefix: isProd ? "/spyder-glue" : undefined,
};

export default nextConfig;
