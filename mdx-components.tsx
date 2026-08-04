import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  // `.code` expects a figure wrapper around the pre; the horizontal padding that
  // `.code-row`'s line-number gutter would otherwise supply is added here instead.
  pre: ({ children, ...rest }) => (
    <figure className="code">
      <pre {...rest} className="px-xl">
        {children}
      </pre>
    </figure>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
