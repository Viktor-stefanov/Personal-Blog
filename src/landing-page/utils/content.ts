import { PATHS } from "@/shared/routing/paths";
import type { TermTone } from "@/shared/types/ui";

export type TermLineSpec = {
  text: string;
  prompt?: boolean;
  tone?: TermTone;
};

export const LANDING = {
  whoami: {
    name: "Viktor Stefanov",
    rest: "- Full-Stack AI-native software, systems engineering & a bit of firmware",
  },
  stack:
    "Python | FastAPI | Rust | Axum | Javascript/TypeScript | Node.js | React | Next.js | docker/podman | k8s | git | CI/CD | Azure",
  headline:
    "I reverse-engineer understanding - breaking things down to see their inner workings.",
  lead: "",
  actions: {
    primary: { label: "./read_posts", href: PATHS.posts },
    secondary: { label: "subscribe --rss", href: PATHS.feed },
  },
  portrait: {
    src: "/ascii-art.png",
    alt: "ASCII-art portrait of the author",
    caption: "portrait.txt",
  },
  reading: {
    label: "currently reading",
    value: "Computer Organization and Architecture",
    sub: "William Stallings",
  },
  quote: {
    text: '// "Simplicity is prerequisite for reliability."',
    cite: "// - Dijkstra",
  },
  pinnedSide: [
    { text: "make flash", prompt: true },
    { text: "flashing 24.1 kB … ok", tone: "muted" },
    { text: "warn: 2 pull-ups unpopulated", tone: "warn" },
    { text: "done.", tone: "ok" },
  ] satisfies TermLineSpec[],
};
