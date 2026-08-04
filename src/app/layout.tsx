import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/shared/components/footer";
import { Nav } from "@/shared/components/nav";
import { RainGutter } from "@/shared/components/rain-gutter";
import { Shell } from "@/shared/components/shell";
import type { FooterProps } from "@/shared/types/footer";
import type { NavBrand } from "@/shared/types/nav";
import { NAV_ITEMS, PATHS } from "@/shared/routing/paths";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Viktor's Blog",
  description:
    "Technical Blog Website in the area of Software, Firmware and Hardware engineering.",
};

const brand: NavBrand = { href: PATHS.home, path: "~/", name: "vstefanov" };

const footer: Omit<FooterProps, "className"> = {
  brand: "~/vstefanov02",
  tagline:
    "Notes on full-stack and AI-native engineering, with a bit of systems-level curiosity thrown in",
  columns: [
    {
      label: "site",
      entries: [
        { label: "posts", href: PATHS.posts },
        { label: "portfolio", href: PATHS.portfolio },
        { label: "about", href: PATHS.about },
      ],
    },
    {
      label: "elsewhere",
      entries: [
        { label: "github", href: "https://github.com", external: true },
        { label: "mastodon", href: "https://mastodon.social", external: true },
        { label: "rss", href: PATHS.feed, external: true },
      ],
    },
    {
      label: "keys",
      entries: [{ label: "gpg 0x0000·0000" }, { label: "ssh ed25519" }],
    },
  ],
  note: "© 2026 — no trackers, no cookies, no newsletter popup",
  meta: "last deploy 2026-07-28",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${ibmPlexSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav
          brand={brand}
          items={NAV_ITEMS}
          feedHref={PATHS.feed}
          shortcut={{ keys: "⌘K", label: "search" }}
          sticky
        />

        {/* .shell is a 96px / 1fr / 96px grid; the outer columns are the rain gutters */}
        <Shell>
          <RainGutter sticky />
          <main>{children}</main>
          <RainGutter sticky />
        </Shell>

        <Footer {...footer} />
      </body>
    </html>
  );
}
