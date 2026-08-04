import { QuoteVariant } from "../types/ui";
import { cn } from "../utils/cn";

export function Quote({
  variant = "default",
  cite,
  children,
  className,
}: {
  variant?: QuoteVariant;
  cite?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <blockquote
      className={cn("quote", className || "")}
      data-variant={variant === "default" ? undefined : variant}
    >
      <p>{children}</p>
      {cite ? <cite>{cite}</cite> : null}
    </blockquote>
  );
}
