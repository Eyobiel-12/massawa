import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/lib/language-context"
import { restaurantSchema } from "@/lib/structured-data"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700", "900"],
})

export const metadata: Metadata = {
  title: "Massawa | Authentic Eritrean & Ethiopian Restaurant in Ede",
  description:
    "Experience the rich flavors and traditions of East African cuisine in an elegant setting at Massawa Restaurant in Ede, Netherlands.",
  keywords: [
    "Eritrean restaurant",
    "Ethiopian restaurant",
    "Ede restaurant",
    "East African cuisine",
    "authentic Ethiopian food",
  ],
  openGraph: {
    title: "Massawa | Authentic Eritrean & Ethiopian Restaurant",
    description: "Experience the rich flavors and traditions of East African cuisine in an elegant setting",
    url: "https://massawarestaurant.com",
    siteName: "Massawa Restaurant",
    images: [
      {
        url: "/og-image.jpg", // This would be replaced with an actual OG image
        width: 1200,
        height: 630,
        alt: "Massawa Restaurant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Massawa | Authentic Eritrean & Ethiopian Restaurant",
    description: "Experience the rich flavors and traditions of East African cuisine in an elegant setting",
    images: ["/og-image.jpg"], // This would be replaced with an actual Twitter image
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }} />
        <link rel="alternate" hrefLang="en" href="https://massawarestaurant.com/en" />
        <link rel="alternate" hrefLang="nl" href="https://massawarestaurant.com/nl" />
        <link rel="alternate" hrefLang="x-default" href="https://massawarestaurant.com" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
