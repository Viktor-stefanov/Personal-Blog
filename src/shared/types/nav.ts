export type NavLink = {
  href: string;
  label: string;
};

export type NavBrand = {
  href: string;
  path: string;
  name: string;
};

export type NavProps = {
  brand: NavBrand;
  items: NavLink[];
  feedHref?: string;
  shortcut?: { keys: string; label: string };
  sticky?: boolean;
  className?: string;
};
