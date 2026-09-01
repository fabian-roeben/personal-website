import type { Components } from "react-markdown";
import { CustomLink } from "./link";

/**
 * Shared ReactMarkdown component overrides for consistent styling across the site.
 * Use these with react-markdown's `components` prop.
 */
export const markdownComponents: Components = {
  h3: ({ node, ...props }) => {
    void node;
    return <h3 className="text-xl" {...props} />;
  },
  p: ({ node, ...props }) => {
    void node;
    return <p className="text-base" {...props} />;
  },
  ul: ({ node, ...props }) => {
    void node;
    return <ul className="list-disc list-inside" {...props} />;
  },
  li: ({ node, ...props }) => {
    void node;
    return <li className="text-base" {...props} />;
  },
  a: ({ node, href, ...props }) => {
    void node;
    return <CustomLink href={href || "#"} className="underline" {...props} />;
  },
};

