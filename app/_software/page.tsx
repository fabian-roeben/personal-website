import { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { mainContentData } from "@/data/content";
import { markdownComponents } from "@/components/ui/markdown-components";
import { CustomLink } from "@/components/ui/link";
import { SoftwareProject } from "@/types/content";
import ReactMarkdown from "react-markdown";

export const metadata: Metadata = {
  title: `Software | ${siteConfig.name}`,
  description: "Software projects and tools developed by " + siteConfig.name,
};

function SoftwareItem({ project }: { project: SoftwareProject }) {
  const hasAsset = !!project.asset;

  return (
    <li
      className={`${hasAsset ? "grid md:grid-cols-[1fr,1fr] gap-8 items-start" : ""}`}
    >
      {/* Content */}
      <div>
        <h3 className="text-muted-foreground backdrop-blur-[1px] mb-2">
          {project.title}
        </h3>
        <p className="text-muted-foreground backdrop-blur-[1px] text-left md:text-justify">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-x-2 gap-y-1 mt-3">
          {project.links.map((link) => (
            <CustomLink
              key={link.url}
              href={link.url}
              className="text-accent-red hover:text-accent-red-foreground transition-all duration-300 backdrop-blur-[1px] whitespace-nowrap"
            >
              [{link.name}]
            </CustomLink>
          ))}
        </div>
      </div>

      {/* Asset (only rendered if exists) */}
      {hasAsset && (
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-border/30 shadow-sm mt-4 md:mt-0">
          <Image
            src={project.asset!.src}
            alt={project.asset!.alt}
            fill
            className="object-cover"
          />
        </div>
      )}
    </li>
  );
}

export default function SoftwarePage() {
  return (
    <div className="container mx-auto py-4 md:py-6 max-w-7xl">
      <div className="animate-slide-up">
        <h1 className="mb-6">SOFTWARE</h1>

        {/* Intro - constrained width on larger screens */}
        <div className="text-muted-foreground mb-12 md:max-w-[55%]">
          <div className="leading-relaxed backdrop-blur-[1px]">
            <ReactMarkdown components={markdownComponents}>
              {mainContentData.softwareIntro}
            </ReactMarkdown>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <h2 className="shrink-0">Projects</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-border/50 to-transparent" />
        </div>

        {mainContentData.softwareProjects.length > 0 && (
          <ul className="space-y-8">
            {mainContentData.softwareProjects.map((project) => (
              <SoftwareItem key={project.title} project={project} />
            ))}
          </ul>
        )}

        <div className="mt-12 pt-6 border-t">
          <CustomLink
            href="/"
            className="text-accent-red hover:text-accent-red-foreground transition-all duration-300"
            external={false}
          >
            [← Back to home]
          </CustomLink>
        </div>
      </div>
    </div>
  );
}
