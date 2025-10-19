"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { useLanguageContext } from "@/components/language-provider"
import type { Language } from "@/lib/i18n"

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Image
                src="/images/getters-logo.png"
                alt="Getters AI"
                width={40}
                height={40}
                className="w-10 h-10 transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#C9A86A]/20 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-bold text-foreground">Getters</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C9A86A] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right Side: Language Toggle + CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card/50 transition-all duration-200"
              >
                <Globe size={18} />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>

              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-card border border-border/50 rounded-lg shadow-lg overflow-hidden z-50">
                  <button
                    onClick={() => handleLanguageSwitch("en")}
                    className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                      language === "en"
                        ? "bg-[#C9A86A]/20 text-[#C9A86A] font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageSwitch("it")}
                    className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                      language === "it"
                        ? "bg-[#C9A86A]/20 text-[#C9A86A] font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                    }`}
                  >
                    Italiano
                  </button>
                </div>
              )}
            </div>

            <Button variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-card/50">
              {translations.nav?.audit || "Get AI Audit"}
            </Button>
            <Button className="bg-[#C9A86A] hover:bg-[#C9A86A]/90 text-background font-medium transition-all duration-200 shadow-lg hover:shadow-[#C9A86A]/50 hover:shadow-lg">
              {translations.nav?.home === "Home" ? "Start Project" : "Inizia Progetto"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-card/50 rounded transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="px-3 py-3 border-t border-border/50 mt-3">
                <p className="text-xs text-muted-foreground mb-2 font-medium">Language</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleLanguageSwitch("en")}
                    className={`flex-1 px-3 py-2 rounded text-sm transition-all ${
                      language === "en"
                        ? "bg-[#C9A86A]/20 text-[#C9A86A] font-medium"
                        : "bg-card/50 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => handleLanguageSwitch("it")}
                    className={`flex-1 px-3 py-2 rounded text-sm transition-all ${
                      language === "it"
                        ? "bg-[#C9A86A]/20 text-[#C9A86A] font-medium"
                        : "bg-card/50 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    IT
                  </button>
                </div>
              </div>

              <div className="px-3 py-2 space-y-2 border-t border-border/50 mt-3">
                <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
                  {translations.nav?.audit || "Get AI Audit"}
                </Button>
                <Button className="w-full bg-[#C9A86A] hover:bg-[#C9A86A]/90 text-background font-medium">
                  {translations.nav?.home === "Home" ? "Start Project" : "Inizia Progetto"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
