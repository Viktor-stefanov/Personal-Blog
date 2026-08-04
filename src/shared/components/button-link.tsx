import * as React from "react";
import NextLink from "next/link";
import { ButtonVariant, Size } from "../types/ui";
import { cn } from "../utils/cn";

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: ButtonVariant;
  size?: Size;
  block?: boolean;
};

const EXTERNAL_HREF = /^https?:\/\//i;

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  function ButtonLink(
    { variant = "outline", size = "md", block, className, href, ...rest },
    ref,
  ) {
    const props = {
      ref,
      className: cn("btn", className || ""),
      "data-variant": variant,
      "data-size": size === "md" ? undefined : size,
      "data-block": block || undefined,
      ...rest,
    };
    return EXTERNAL_HREF.test(href) ? (
      <a href={href} target="_blank" rel="noreferrer noopener" {...props} />
    ) : (
      <NextLink href={href} {...props} />
    );
  },
);
