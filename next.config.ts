import createMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const basePath = isGithubActions ? "/devhimchan" : "";

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
  assetPrefix: basePath,
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
