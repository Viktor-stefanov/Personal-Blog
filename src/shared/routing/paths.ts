import type { NavLink } from "../types/nav";

export const PATHS = {
  home: "/",
  posts: "/posts",
  portfolio: "/portfolio",
  about: "/about",
  feed: "/feed.xml",
} as const;

/** `portfolio` is in the nav ahead of its route. */
export const NAV_ITEMS: NavLink[] = [
  { href: PATHS.posts, label: "./posts" },
  { href: PATHS.portfolio, label: "./portfolio" },
  { href: PATHS.about, label: "./about" },
];

export const postPath = (slug: string) => `${PATHS.posts}/${slug}`;
