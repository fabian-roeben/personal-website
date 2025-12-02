import { SectionHeader } from "../../ui/section-header";
import { CustomLink } from "../../ui/link";
import { mainContentData } from "@/data/content";
import { markdownComponents } from "../../ui/markdown-components";
import ReactMarkdown from "react-markdown";

export function Software() {
  return (
    <section id="software">
      <SectionHeader title="SOFTWARE" />
      <div className="text-muted-foreground">
        <div className="leading-relaxed backdrop-blur-[1px] text-left md:text-justify">
          <ReactMarkdown components={markdownComponents}>
            {mainContentData.softwareIntro}
          </ReactMarkdown>
        </div>
        <div className="mt-2">
          <CustomLink
            href="/software"
            className="text-accent-red hover:text-accent-red-foreground transition-all duration-300"
            external={false}
          >
            [Learn more →]
          </CustomLink>
        </div>
      </div>
    </section>
  );
}
