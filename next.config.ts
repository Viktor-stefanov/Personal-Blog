import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

// No `pageExtensions`: posts are rendered by dynamic import from content/, not by
// file-based MDX routing, so .mdx files must never become routes themselves.
const withMDX = createMDX({});

export default withMDX(nextConfig);
