import Image from "next/image";
import { cn } from "../utils/cn";

export function Portrait({
  src,
  alt,
  caption,
  scanlines = true,
  sizes = "380px",
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  scanlines?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <figure
      className={cn("portrait", className || "")}
      data-scanlines={scanlines ? undefined : "false"}
    >
      <Image src={src} alt={alt} fill sizes={sizes} />
      <span className="tint" />
      <span className="scan" />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
