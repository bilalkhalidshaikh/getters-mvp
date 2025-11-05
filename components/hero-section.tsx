"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { useLanguageContext } from "@/components/language-provider"

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

export function HeroSection() {
  const { translations, isLoaded } = useLanguageContext()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!isLoaded || !mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 gradient-overlay"></div>

        {/* Subtle accent glow */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl"></div>
      </div>

      <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(85, 170, 255)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="rgb(85, 170, 255)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="url(#neuralGradient)" strokeWidth="0.5" />
        <line x1="90%" y1="20%" x2="10%" y2="80%" stroke="url(#neuralGradient)" strokeWidth="0.5" />
        <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="url(#neuralGradient)" strokeWidth="0.5" />
      </svg>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full animate-subtle-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/30 rounded text-sm text-accent backdrop-blur-sm">
            Autonomous Intelligence for a Chaotic World
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight text-foreground">
            {translations.hero?.tagline || "Where European Intelligence Meets Autonomous Execution."}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {translations.hero?.description ||
              "Getters builds domain-specialized AI agents that think, reason, and act independently — transforming operations across finance, healthcare, education, and humanitarian sectors."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-3 text-base transition-smooth"
            >
              {translations.hero?.cta1 || "Build an Agent"}
              <ArrowRightIcon />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border border-accent/30 hover:bg-accent/5 hover:border-accent/50 px-8 py-3 text-base text-foreground transition-smooth bg-transparent"
            >
              {translations.hero?.cta2 || "Talk to Getters Intelligence"}
            </Button>
          </div>

          <div className="mt-16 pt-8 border-t border-border/30">
            <p className="text-xs text-muted-foreground mb-6 uppercase tracking-wider">
              Trusted by European enterprises
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-60 pt-0 pb-4">
              {["Finance", "Healthcare", "Education", "Government", "Enterprise"].map((sector) => (
                <div key={sector} className="text-sm text-muted-foreground font-medium">
                  {sector}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-30px) translateX(15px);
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  )
}
