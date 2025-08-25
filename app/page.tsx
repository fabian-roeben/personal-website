import { Header } from "@/components/layout/Header"
import { ProfileSection } from "@/components/layout/ProfileSection"
import { MainContent } from "@/components/layout/MainContent"
import { Footer } from "@/components/layout/Footer"

// Page-specific metadata is defined globally in app/layout.tsx to avoid duplication.

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Fabian Roeben",
    "url": "https://fabianroeben.com",
    "jobTitle": "PhD Candidate and Researcher in Economics",
    "sameAs": [
      "https://github.com/fabian-roeben",
      "https://linkedin.com/in/fabianroeben"
    ]
  }

  return (
    <div className="min-h-screen bg-background px-4">
      <Header />
      <main className="container mx-auto py-4 md:py-6 max-w-7xl">
        <div className="grid gap-4 md:grid-cols-[400px_1fr] md:gap-6 justify-center max-w-screen-xl mx-auto relative">
          <aside className="animate-slide-up md:animate-slide-left md:h-[calc(100vh-4rem)]">
            <ProfileSection />
          </aside>
          <div className="animate-slide-up md:animate-slide-right">
            <MainContent />
          </div>
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}