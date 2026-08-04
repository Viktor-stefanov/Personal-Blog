import { cn } from "../utils/cn";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("container", className || "")}>{children}</div>;
}
