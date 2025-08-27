import { SectionHeader } from "../../ui/section-header";
import { CustomLink } from "../../ui/link";
import { mainContentData } from "@/data/content";
import ReactMarkdown from "react-markdown";

export function About() {
  return (
    <section id="about">
      <SectionHeader title="WELCOME!" />
      <div className="space-y-5 text-muted-foreground">
        <div className="leading-relaxed backdrop-blur-[1px] text-justify">
          <ReactMarkdown
            components={{
              a: ({ node, ...props }) => (
                <CustomLink
                  href={props.href || ""}
                  className="underline"
                  {...props}
                />
              ),
            }}
          >
            {mainContentData.about}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  );
}

