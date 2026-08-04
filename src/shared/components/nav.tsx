"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { NavProps } from "../types/nav";
import { cn } from "../utils/cn";
import { NavItem } from "./nav-item";

export function Nav({
  brand,
  items,
  feedHref,
  shortcut,
  sticky,
  className,
}: NavProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("nav", className || "")} data-sticky={sticky || undefined}>
      <NextLink href={brand.href} className="brand">
        <span className="dot" />
        <span className="path">{brand.path}</span>
        {brand.name}
      </NextLink>

      <ul>
        {items.map((item) => (
          <li key={item.href}>
            <NavItem
              href={item.href}
              // prefix match so a post page keeps its section lit, not just the index
              active={
                pathname === item.href || pathname.startsWith(`${item.href}/`)
              }
            >
              {item.label}
            </NavItem>
          </li>
        ))}
      </ul>

      <span className="spacer" />

      {feedHref ? <NavItem href={feedHref}>rss</NavItem> : null}
      {shortcut ? (
        <span className="kbd">
          <span>{shortcut.keys}</span>
          {shortcut.label}
        </span>
      ) : null}
    </nav>
  );
}
