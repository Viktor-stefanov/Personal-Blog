import NextLink from "next/link";
import { cn } from "../utils/cn";

export function NavItem({
  href,
  active,
  children,
  className,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <NextLink
      href={href}
      className={cn("nav-item", className || "")}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </NextLink>
  );
}
