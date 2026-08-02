import NextLink from "next/link";
import { cn } from "../utils/cn";

export type LinkVariant = "default" | "external" | "quiet" | "bare";

export function Link({
  variant = "default",
  className,
  href,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: LinkVariant;
  href: string;
}) {
  const props = {
    className: cn("nav-item", className || ""),
    "data-variant": variant === "default" ? undefined : variant,
    ...rest,
  };
  return variant === "external" ? (
    <a href={href} target="_blank" rel="noreferrer noopener" {...props} />
  ) : (
    <NextLink href={new URL(href)} {...props} />
  );
}
