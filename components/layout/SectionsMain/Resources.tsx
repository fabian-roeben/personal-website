import { SectionHeader } from "@/components/ui/section-header";
import { CustomLink } from "@/components/ui/link";
import { mainContentData } from "@/data/content";
import { markdownComponents } from "@/components/ui/markdown-components";
import ReactMarkdown from "react-markdown";

export function Resources() {
  return (
    <section id="resources">
      <SectionHeader title="RESOURCES" />
      <div className="space-y-4 text-muted-foreground">
        {mainContentData.resources.map((resource) => (
          <p key={resource.id} className="backdrop-blur-[1px]">
            <ReactMarkdown
              components={{
                ...markdownComponents,
                p: ({ children }) => <span>{children}</span>,
              }}
            >
              {resource.description}
            </ReactMarkdown>
            {" "}
            {resource.lectures.map((lecture, index) => (
              <span key={lecture.slides}>
                {index > 0 ? ", " : ""}
                {lecture.title}{" "}
                <CustomLink
                  href={lecture.slides}
                  aria-label={`Slides for ${lecture.title} (PDF)`}
                  className="text-accent-red hover:text-accent-red-foreground whitespace-nowrap"
                >
                  [Slides]
                </CustomLink>
              </span>
            ))}
          </p>
        ))}
      </div>
    </section>
  );
}
