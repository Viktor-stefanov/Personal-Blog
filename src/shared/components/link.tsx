import NextLink from "next/link";
import { LinkVariant } from "../types/ui";
import { cn } from "../utils/cn";

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
    className: cn("link", className || ""),
    "data-variant": variant === "default" ? undefined : variant,
    ...rest,
  };
  return variant === "external" ? (
    <a href={href} target="_blank" rel="noreferrer noopener" {...props} />
  ) : (
    <NextLink href={href} {...props} />
  );
}
