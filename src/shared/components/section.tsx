import { cn } from "../utils/cn";

export function Section({
  rule,
  children,
  className,
}: {
  rule?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("section", className || "")} data-rule={rule || undefined}>
      {children}
    </section>
  );
}
