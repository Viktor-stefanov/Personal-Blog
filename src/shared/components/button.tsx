import * as React from "react";
import { ButtonVariant, Size } from "../types/ui";
import { cn } from "../utils/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: Size;
  block?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = "outline", size = "md", block, className, ...rest },
    ref,
  ) {
    return (
      <button
        ref={ref}
        className={cn("btn", className || "")}
        data-variant={variant}
        data-size={size === "md" ? undefined : size}
        data-block={block || undefined}
        {...rest}
      />
    );
  },
);
