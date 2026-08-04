import { cn } from "../utils/cn";

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn("tag", className || "")}>{children}</span>;
}

export function TagRow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("tag-row", className || "")}>{children}</div>;
}
