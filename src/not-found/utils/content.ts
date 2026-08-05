import { PATHS } from "@/shared/routing/paths";

export const NOT_FOUND = {
  wantedPath: "~/posts/the-page-you-wanted",
  headline: "This path doesn't resolve.",
  lead: "Either I moved something and forgot to leave a redirect, or the link that sent you here was wrong. Both are my fault.",
  actions: {
    primary: { label: "cd ~/", href: PATHS.home },
    secondary: { label: "ls ~/posts", href: PATHS.posts },
  },
  portrait: {
    src: "/ascii-art.png",
    alt: "ASCII-art portrait of the author",
    caption: "signal lost",
  },
  quote: {
    text: '// "It works on my machine."',
    cite: "// - everyone, at least once",
  },
  suggestions: { label: "try these instead", hint: "most recent" },
};
