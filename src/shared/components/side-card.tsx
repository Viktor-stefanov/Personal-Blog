import { cn } from "../utils/cn";

export function SideCard({
  label,
  value,
  sub,
  className,
}: {
  label: string;
  value: React.ReactNode;
  sub?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("sidecard", className || "")}>
      <span className="label">{label}</span>
      <span className="value">{value}</span>
      {sub ? <span className="sub">{sub}</span> : null}
    </div>
  );
}
