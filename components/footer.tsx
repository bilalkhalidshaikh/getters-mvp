"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Mail, MapPin, Linkedin, Twitter, Github, ArrowRight } from "lucide-react"
import { useLanguageContext } from "@/components/language-provider"
import { useState } from "react"

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
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    {translations.contact?.email || "hello@getters.ai"}
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
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
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" />
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
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium shrink-0 transition-all duration-200 shadow-lg hover:shadow-primary/50"
              >
                {subscribed ? "Subscribed!" : translations.footer?.subscribe || "Subscribe"}
                <ArrowRight className="ml-2 w-4 h-4" />
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
