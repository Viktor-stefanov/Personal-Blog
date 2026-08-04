import { cn } from "../utils/cn";

export function Shell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("shell", className || "")}>{children}</div>;
}
