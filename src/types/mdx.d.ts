declare module "*.mdx" {
  import { ReactElement } from "react";
  const MDXComponent: () => ReactElement;
  export default MDXComponent;
}
