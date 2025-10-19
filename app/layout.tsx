import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Getters - Next-Generation Digital AI Agency",
  description:
    "We design, build, and deploy autonomous, full-stack, revenue-driving systems to help businesses scale faster, smarter, and with zero operational waste.",
  generator: "Getters AI",
  keywords: "AI agency, digital transformation, autonomous systems, full-stack development, AI automation",
  authors: [{ name: "Getters AI Agency" }],
  openGraph: {
    title: "Getters - Next-Generation Digital AI Agency",
    description:
      "We design, build, and deploy autonomous, full-stack, revenue-driving systems to help businesses scale faster, smarter, and with zero operational waste.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Getters - Next-Generation Digital AI Agency",
    description:
      "We design, build, and deploy autonomous, full-stack, revenue-driving systems to help businesses scale faster, smarter, and with zero operational waste.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
