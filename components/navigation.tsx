"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguageContext } from "@/components/language-provider"
import type { Language } from "@/lib/i18n"

function MenuIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function CloseIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function GlobeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const { language, switchLanguage, translations, isLoaded } = useLanguageContext()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isLoaded) return null

  const navItems = [
    { name: translations.nav?.home || "Home", href: "/" },
    { name: translations.nav?.services || "Services", href: "#services" },
    { name: translations.nav?.caseStudies || "Case Studies", href: "#case-studies" },
    { name: translations.nav?.about || "About", href: "#about" },
    { name: translations.nav?.contact || "Contact", href: "#contact" },
  ]

  const handleLanguageSwitch = (lang: Language) => {
    switchLanguage(lang)
    setIsLanguageMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-smooth ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Image
                src="/images/getters-logo.png"
                alt="Getters AI"
                width={40}
                height={40}
                className="w-10 h-10 transition-smooth"
              />
              <div className="absolute inset-0 bg-accent/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-smooth" />
            </div>
            <span className="text-lg font-bold text-foreground tracking-tight">Getters</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-smooth relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-smooth group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right Side: Language Toggle + CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center space-x-1 px-3 py-2 rounded text-sm text-muted-foreground hover:text-foreground transition-smooth hover:bg-card/30"
              >
                <GlobeIcon size={16} />
                <span className="font-medium">{language.toUpperCase()}</span>
              </button>

              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-card/80 backdrop-blur-md border border-border/50 rounded shadow-lg overflow-hidden z-50">
                  <button
                    onClick={() => handleLanguageSwitch("en")}
                    className={`w-full px-4 py-2 text-left text-sm transition-smooth ${
                      language === "en"
                        ? "bg-accent/20 text-accent font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageSwitch("it")}
                    className={`w-full px-4 py-2 text-left text-sm transition-smooth ${
                      language === "it"
                        ? "bg-accent/20 text-accent font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                    }`}
                  >
                    Italiano
                  </button>
                </div>
              )}
            </div>

            <Button
              variant="ghost"
              className="text-sm text-muted-foreground hover:text-foreground hover:bg-card/30 transition-smooth"
            >
              {translations.nav?.audit || "Get AI Audit"}
            </Button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium transition-smooth text-sm">
              {translations.nav?.home === "Home" ? "Talk to Getters" : "Parla con Getters"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card/80 backdrop-blur-md border-t border-border/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-card/50 rounded transition-smooth"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="px-3 py-3 border-t border-border/30 mt-3">
                <p className="text-xs text-muted-foreground mb-2 font-medium">Language</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleLanguageSwitch("en")}
                    className={`flex-1 px-3 py-2 rounded text-sm transition-smooth ${
                      language === "en"
                        ? "bg-accent/20 text-accent font-medium"
                        : "bg-card/50 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => handleLanguageSwitch("it")}
                    className={`flex-1 px-3 py-2 rounded text-sm transition-smooth ${
                      language === "it"
                        ? "bg-accent/20 text-accent font-medium"
                        : "bg-card/50 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    IT
                  </button>
                </div>
              </div>

              <div className="px-3 py-2 space-y-2 border-t border-border/30 mt-3">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sm text-muted-foreground hover:text-foreground"
                >
                  {translations.nav?.audit || "Get AI Audit"}
                </Button>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium text-sm">
                  {translations.nav?.home === "Home" ? "Talk to Getters" : "Parla con Getters"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
