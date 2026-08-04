import { cn } from "../utils/cn";

export function Lead({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("lead", className || "")}>{children}</p>;
}
