import * as React from "react";
import { PostListLayout } from "../types/ui";
import { cn } from "../utils/cn";

/** Below this the rail collapses to a grid; exported so callers can match their labels to it. */
export const RAIL_MIN_POSTS = 2;

export function PostList({
  layout,
  children,
  className,
}: {
  layout?: PostListLayout;
  children: React.ReactNode;
  className?: string;
}) {
  // the theme only earns its scroll-snapping rail once there are enough cards
  const resolved =
    layout ??
    (React.Children.count(children) >= RAIL_MIN_POSTS ? "rail" : "grid");

  return (
    <div className={cn("posts", className || "")} data-layout={resolved}>
      {children}
    </div>
  );
}
