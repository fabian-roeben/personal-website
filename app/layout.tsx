import "./globals.css";
import { Metadata, Viewport } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: 'Fabian Roeben | Economics',
    template: '%s | Fabian Roeben'
  },
  description: "Fabian Roeben researches the application of artificial intelligence and machine learning in economics at the University of Cologne, focusing on economic modeling and data-driven insights.",
  keywords: ['AI in Economics', 'Machine Learning Economics', 'Economic Data Science', 'Computational Economics', 'Economic Modeling', 'AI Research'],
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/favicon-32x32.png",
  },
  openGraph: {
    title: 'Fabian Roeben | Economics',
    description: 'Research on artificial intelligence and machine learning applications in economics, focusing on computational methods and economic modeling.',
    url: 'https://fabianroeben.com',
    siteName: 'Fabian Roeben',
    locale: 'en_US',
    type: 'website',
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}