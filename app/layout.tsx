import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { LanguageProvider } from "@/lib/i18n/LanguageContext"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Jesse Media | Social Media Kanäle mit Millionen Reichweite",
  description: "Wir bauen Social Media Kanäle mit Millionen Reichweite. Über 1,1 Mio. YouTube Abonnenten. Von der Idee zum viralen Format. Made in Berlin.",
  keywords: ["Jesse Media", "YouTube", "Social Media", "Content Creator", "Berlin", "Gaming", "Entertainment"],
  authors: [{ name: "Jesse Media" }],
  openGraph: {
    title: "Jesse Media | Social Media Kanäle mit Millionen Reichweite",
    description: "Wir bauen Social Media Kanäle mit Millionen Reichweite. Über 1,1 Mio. YouTube Abonnenten.",
    url: "https://jessemedia.de",
    siteName: "Jesse Media",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesse Media | Social Media Kanäle mit Millionen Reichweite",
    description: "Wir bauen Social Media Kanäle mit Millionen Reichweite.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="antialiased bg-[#050505] text-white min-h-screen">
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
