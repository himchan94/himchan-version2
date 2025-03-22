import createMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const basePath = isGithubActions ? "/himchan-version2" : "";
const assetPrefix = isGithubActions ? "/himchan-version2/" : "/";
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    remotePatterns: [
      {
        protocol: "https" as const,
        hostname: "**",
      },
    ],
  },
  basePath,
  assetPrefix,
  trailingSlash: true, // 반드시 추가 (export 대응)
  output: "export" as const,
  distDir: "out",
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
});

export default withMDX(nextConfig);
