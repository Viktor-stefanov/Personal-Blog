import type { NavLink } from "../types/nav";

export const PATHS = {
  home: "/",
  posts: "/posts",
  about: "/about",
  feed: "/feed.xml",
} as const;

export const NAV_ITEMS: NavLink[] = [
  { href: PATHS.posts, label: "./posts" },
  { href: PATHS.about, label: "./about" },
];

export const postPath = (slug: string) => `${PATHS.posts}/${slug}`;
