import NextLink from "next/link";
import { FooterProps } from "../types/footer";
import { cn } from "../utils/cn";

export function Footer({
  brand,
  tagline,
  columns,
  note,
  meta,
  className,
}: FooterProps) {
  return (
    <footer className={cn("footer", className || "")}>
      <div className="top">
        <div className="about">
          <span className="brand">{brand}</span>
          <p>{tagline}</p>
        </div>

        {columns.map((column) => (
          <div className="col" key={column.label}>
            <span className="label">{column.label}</span>
            {column.entries.map((entry) => {
              if (!entry.href) {
                return <span key={entry.label}>{entry.label}</span>;
              }
              return entry.external ? (
                <a
                  key={entry.label}
                  href={entry.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {entry.label} ↗
                </a>
              ) : (
                <NextLink key={entry.label} href={entry.href}>
                  {entry.label}
                </NextLink>
              );
            })}
          </div>
        ))}
      </div>

      <div className="bottom">
        <span>{note}</span>
        {meta ? <span>{meta}</span> : null}
      </div>
    </footer>
  );
}
