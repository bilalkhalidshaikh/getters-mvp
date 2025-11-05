"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useLanguageContext } from "@/components/language-provider"
import { useState } from "react"

// Inline SVG functions
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 5L2 7" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-3 1" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

export function Footer() {
  const { translations, isLoaded, language, switchLanguage } = useLanguageContext()
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  if (!isLoaded) return null

  const footerLinks = {
    Services: [
      { name: "AI Agent Development", href: "#services" },
      { name: "Process Automation", href: "#services" },
      { name: "Data & Analytics", href: "#services" },
      { name: "Full-Stack Engineering", href: "#services" },
      { name: "Creative AI Solutions", href: "#services" },
    ],
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Case Studies", href: "#case-studies" },
      { name: "Careers", href: "#careers" },
      { name: "Blog", href: "#blog" },
      { name: "Contact", href: "#contact" },
    ],
    Resources: [
      { name: "AI Readiness Guide", href: "#resources" },
      { name: "ROI Calculator", href: "#resources" },
      { name: "Whitepapers", href: "#resources" },
      { name: "Webinars", href: "#resources" },
      { name: "Documentation", href: "#resources" },
    ],
    Legal: [
      { name: translations.footer?.privacy || "Privacy Policy", href: "#privacy" },
      { name: translations.footer?.terms || "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Security", href: "#security" },
    ],
  }

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch("https://formsubmit.co/hello@getters.ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          subject: "Newsletter Subscription",
          email: email,
          message: "New newsletter subscriber",
        }),
      })
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    } catch (error) {
      console.error("Subscription error:", error)
    }
  }

  return (
    <footer className="bg-background border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="relative">
                  <Image
                    src="/images/getters-logo.png"
                    alt="Getters AI"
                    width={40}
                    height={40}
                    className="w-10 h-10 transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-xl font-bold text-foreground">Getters</span>
              </Link>

              <p className="text-muted-foreground leading-relaxed">
                {translations.footer?.tagline ||
                  "We don't build tools. We build intelligence. Autonomous AI systems that drive revenue and eliminate operational waste."}
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <MailIcon />
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    {translations.contact?.email || "hello@getters.ai"}
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPinIcon />
                  <span className="text-muted-foreground">
                    {translations.contact?.locations?.[0]?.city || "Milan"},{" "}
                    {translations.contact?.locations?.[0]?.country || "Italy"}
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <LinkedinIcon />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <TwitterIcon />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <GithubIcon />
                </Button>
              </div>

              {/* Language Toggle */}
              <div className="flex space-x-2 pt-4 border-t border-primary/10">
                <button
                  onClick={() => switchLanguage("en")}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                    language === "en" ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => switchLanguage("it")}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                    language === "it" ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  IT
                </button>
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {Object.entries(footerLinks).map(([category, links]) => (
                  <div key={category}>
                    <h3 className="font-semibold text-foreground mb-4">{category}</h3>
                    <ul className="space-y-3">
                      {links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                {translations.footer?.newsletter || "Stay Updated"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === "en"
                  ? "Get the latest insights on AI automation and digital transformation."
                  : "Ricevi gli ultimi approfondimenti su automazione AI e trasformazione digitale."}
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder={translations.footer?.newsletter || "Enter your email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 md:w-64 px-3 py-2 bg-card border border-primary/20 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              />
              <Button
                type="submit"
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium shrink-0 transition-all duration-200 shadow-lg hover:shadow-primary/50 flex items-center gap-2"
              >
                {subscribed ? "Subscribed!" : translations.footer?.subscribe || "Subscribe"}
                <ArrowRightIcon />
              </Button>
            </form>
          </div>
        </div>

        <Separator className="bg-primary/10" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2025 Getters AI Agency. All rights reserved.</p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>Built with autonomous AI systems</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>System Status: Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
