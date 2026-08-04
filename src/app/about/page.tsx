import type { Metadata } from "next";
import { AboutMe } from "@/about-me/components/about-me";

export const metadata: Metadata = { title: "About — Viktor's Blog" };

export default function Page() {
  return <AboutMe />;
}
