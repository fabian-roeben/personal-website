import "./globals.css";
import { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import { Inter, Source_Serif_4 } from "next/font/google";
import { WaveBackground } from "@/components/ui/waves-background";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  display: 'swap',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Fabian Roeben',
    template: '%s'
  },
  description: "Fabian Roeben researches the application of artificial intelligence and machine learning in economics at the University of Cologne, focusing on economic modeling and data-driven insights.",
  keywords: ['AI in Economics', 'Machine Learning Economics', 'Economic Data Science', 'Computational Economics', 'Economic Modeling', 'AI Research'],
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/android-chrome-192x192.png",
  },
  openGraph: {
    title: 'Fabian Roeben',
    description: 'Ph.D. Candidate in Economics at the University of Cologne researching applications of artificial intelligence and machine learning in economics.',
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
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${sourceSerif.variable}`}>
      <body>
        <WaveBackground />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}