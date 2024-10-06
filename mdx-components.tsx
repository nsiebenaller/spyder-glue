import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => (
      <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
        {children}
      </h1>
    ),
    p: ({ children }) => (
      <p className="my-4 font-light leading-7 text-white">{children}</p>
    ),
  };
}
