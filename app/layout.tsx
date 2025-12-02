import "./globals.css";
import { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import { Inter, Source_Serif_4 } from "next/font/google";
import { WaveBackground } from "@/components/ui/waves-background";
import { siteConfig } from "@/data/siteConfig";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: "%s",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/android-chrome-192x192.png",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.profileImage.src}`,
        width: 1200,
        height: 1200,
        alt: siteConfig.profileImage.alt,
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
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
        <Providers>
          <WaveBackground />
          <div className="flex flex-col min-h-screen px-4">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}