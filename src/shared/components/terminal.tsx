import { TermTone, TerminalVariant } from "../types/ui";
import { cn } from "../utils/cn";

export function Terminal({
  variant = "default",
  children,
  className,
}: {
  variant?: TerminalVariant;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("term", className || "")}
      data-variant={variant === "default" ? undefined : variant}
    >
      {children}
    </div>
  );
}

export function TermLine({
  prompt,
  tone,
  children,
  className,
}: {
  prompt?: boolean;
  tone?: TermTone;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("term-line", className || "")} data-tone={tone}>
      {prompt ? (
        <>
          <span className="prompt">$</span>{" "}
        </>
      ) : null}
      {children}
    </p>
  );
}

export function Cursor() {
  return <i className="cursor" />;
}
