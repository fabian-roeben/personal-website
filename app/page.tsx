import { ProfileSection } from "@/components/layout/ProfileSection"
import { MainContent } from "@/components/layout/MainContent"
import { siteConfig } from "@/data/siteConfig"

// Page-specific metadata is defined globally in app/layout.tsx to avoid duplication.

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "jobTitle": siteConfig.jobTitle,
    "sameAs": [
      siteConfig.socials.github,
      siteConfig.socials.linkedin,
      siteConfig.socials.twitter,
    ]
  }

  return (
    <>
      <div className="container mx-auto py-4 md:py-6 max-w-7xl">
        <div className="grid gap-4 md:grid-cols-[400px_1fr] md:gap-6 justify-center max-w-(--breakpoint-xl) mx-auto relative">
          <aside className="animate-slide-up md:animate-slide-left md:h-[calc(100vh-4rem)]">
            <ProfileSection />
          </aside>
          <div className="animate-slide-up md:animate-slide-right">
            <MainContent />
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}