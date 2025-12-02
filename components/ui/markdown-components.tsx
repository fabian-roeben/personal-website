import { AnchorHTMLAttributes, HTMLAttributes } from "react";
import { CustomLink } from "./link";

/**
 * Shared ReactMarkdown component overrides for consistent styling across the site.
 * Use these with react-markdown's `components` prop.
 */
export const markdownComponents = {
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl" {...props} />
  ),
  p: (props: HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-base" {...props} />
  ),
  ul: (props: HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside" {...props} />
  ),
  li: (props: HTMLAttributes<HTMLLIElement>) => (
    <li className="text-base" {...props} />
  ),
  a: ({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <CustomLink href={href || "#"} className="underline" {...props} />
  ),
};

