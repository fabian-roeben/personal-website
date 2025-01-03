import { Header } from "@/components/layout/Header"
import { ProfileSection } from "@/components/layout/ProfileSection"
import { MainContent } from "@/components/layout/MainContent"
import { Footer } from "@/components/layout/Footer"

export const metadata = {
  title: "Fabian Roeben",
  description: "Fabian Roeben's personal website showcasing research and academic work.",
  openGraph: {
    title: 'Fabian Roeben | Economics',
    description: 'Ph.D. Candidate in Economics at the University of Cologne.',
    url: 'https://fabianroeben.com',
    siteName: 'Fabian Roeben',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: 'https://fabianroeben.com/profile-photo.jpg',
      width: 1200,
      height: 1200,
      alt: 'Fabian Roeben Profile Photo'
    }]
  }
}

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
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 md:px-0 py-4 md:py-6 max-w-7xl">
        <div className="grid gap-4 md:grid-cols-[400px_1fr] md:gap-6 justify-center max-w-screen-xl mx-auto relative">
          <aside className="md:h-[calc(100vh-4rem)]">
            <ProfileSection />
          </aside>
          <MainContent />
        </div>
      </main>
      <Footer />
    </div>
  )
}