import { SectionHeader } from "../../ui/section-header";
import { CustomLink } from "../../ui/link";
import { mainContentData } from "@/data/content";
import { markdownComponents } from "../../ui/markdown-components";
import ReactMarkdown from "react-markdown";

export function About() {
  return (
    <section id="about">
      <SectionHeader title="WELCOME!" />
      <div className="space-y-5 text-muted-foreground">
        <div className="leading-relaxed backdrop-blur-[1px] text-left md:text-justify">
          <ReactMarkdown components={markdownComponents}>
            {mainContentData.about}
          </ReactMarkdown>
        </div>
        <div className="backdrop-blur-[1px] font-medium">
          <p>I will join ETH Zurich as a Post-Doctoral Researcher in Fall 2026.</p>
        </div>
        <div className="backdrop-blur-[1px]">
          <p>
            Affiliations:{" "}
            {mainContentData.affiliations.map((affiliation, index) => (
              <span key={affiliation.url}>
                <CustomLink className="underline" href={affiliation.url}>
                  {affiliation.name}
                </CustomLink>
                {index < mainContentData.affiliations.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
