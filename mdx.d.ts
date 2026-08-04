// Augments @types/mdx so the `metadata` export every post declares is typed at
// the import site. TypeScript never parses the .mdx itself, so this is a promise
// rather than a check — a post that violates PostMeta fails at src/shared/utils/posts.ts.
declare module "*.mdx" {
  import type { PostMeta } from "@/shared/types/post";

  export const metadata: PostMeta;
}
