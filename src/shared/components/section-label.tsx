import { cn } from "../utils/cn";

export function SectionLabel({
  index,
  hint,
  children,
  className,
}: {
  index?: string;
  hint?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("section-label", className || "")}>
      {index ? <span className="index">{index}</span> : null}
      <h2 className="text">{children}</h2>
      {hint ? <span className="hint">{hint}</span> : null}
    </div>
  );
}
