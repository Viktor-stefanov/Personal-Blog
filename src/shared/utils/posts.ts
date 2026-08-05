import { metadata as centralAiServicePart1 } from "@content/posts/central-ai-service-part-1.mdx";
import { metadata as centralAiServicePart2 } from "@content/posts/central-ai-service-part-2.mdx";
import type { PostMeta } from "../types/post";

// Posts are enumerated by hand because metadata lives in each MDX module's exports
// rather than in frontmatter: there is nothing to glob, and Turbopack has no
// import.meta.glob. Adding a post means adding an import above and an entry below.
// This annotation is where a malformed post actually gets caught — tsc never reads
// the .mdx, so the type declared in mdx.d.ts is taken on trust.
export const POSTS: PostMeta[] = [
  centralAiServicePart1,
  centralAiServicePart2,
].sort((a, b) => b.date.localeCompare(a.date));

export const PINNED_POST = POSTS.find((post) => post.pinned);

export const LATEST_POSTS = POSTS.filter((post) => !post.pinned);
