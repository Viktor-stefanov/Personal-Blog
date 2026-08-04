import NextLink from "next/link";
import { PostCardProps } from "../types/post";
import { cn } from "../utils/cn";
import { Tag, TagRow } from "./tag";

export function PostCard({
  href,
  title,
  excerpt,
  date,
  topic,
  duration,
  tags,
  more,
  variant = "default",
  side,
  className,
}: PostCardProps) {
  const hasMeta = Boolean(date || topic || duration);
  const hasFoot = Boolean(tags?.length || more);

  return (
    <NextLink
      href={href}
      className={cn("card", className || "")}
      data-variant={variant === "default" ? undefined : variant}
    >
      {hasMeta ? (
        <div className="meta">
          {date}
          {date && topic ? <span className="sep">·</span> : null}
          {topic ? <span className="topic">{topic}</span> : null}
          {duration && (date || topic) ? <span className="sep">·</span> : null}
          {duration}
        </div>
      ) : null}

      <h3 className="title">{title}</h3>
      {excerpt ? <p className="excerpt">{excerpt}</p> : null}

      {hasFoot ? (
        <div className="foot">
          {tags?.length ? (
            <TagRow>
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagRow>
          ) : null}
          {more ? <span className="more">{more}</span> : null}
        </div>
      ) : null}

      {side ? <div className="side">{side}</div> : null}
    </NextLink>
  );
}
