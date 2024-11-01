import { Header } from "@/components/layout/Header"
import { ProfileSection } from "@/components/layout/ProfileSection"
import { MainContent } from "@/components/layout/MainContent"
import { Footer } from "@/components/layout/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        <div className="grid gap-8 md:grid-cols-[300px_1fr] md:gap-12">
          <aside className="md:sticky md:top-16 md:self-start">
            <ProfileSection />
          </aside>
          <MainContent />
        </div>
      </main>
      <Footer />
    </div>
  )
}