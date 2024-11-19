import { Header } from "@/components/layout/Header"
import { ProfileSection } from "@/components/layout/ProfileSection"
import { MainContent } from "@/components/layout/MainContent"
import { Footer } from "@/components/layout/Footer"
import Head from 'next/head';

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
    <>
      <Head>
        <script
          key="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-4 md:py-6 max-w-6xl">
          <div className="grid gap-4 md:grid-cols-[300px_1fr] md:gap-6 justify-center max-w-screen-lg mx-auto">
            <aside className="md:sticky md:top-16 md:self-start">
              <ProfileSection />
            </aside>
            <MainContent />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}