import { PostCardVariant } from "./ui";

/** The `metadata` export each content/posts/*.mdx declares. Content, not view props. */
export type PostMeta = {
  slug: string;
  title: string;
  /** ISO date; sorted as a string, so keep it zero-padded. */
  date: string;
  topic: string;
  duration: string;
  tags: string[];
  excerpt: string;
  pinned?: boolean;
};

export type PostCardProps = {
  href: string;
  title: string;
  excerpt?: string;
  date?: string;
  topic?: string;
  duration?: string;
  tags?: string[];
  more?: string;
  variant?: PostCardVariant;
  side?: React.ReactNode;
  className?: string;
};
