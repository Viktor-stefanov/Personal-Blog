import * as React from "react";
import { cn } from "../utils/cn";
import NextLink from "next/link";

type LinkVariant = "default" | "external" | "quiet" | "bare";

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
    <a href={href} target="_blank" rel="noreferrer noopenner" {...props} />
  ) : (
    <NextLink href={href} {...props} />
  );
}
