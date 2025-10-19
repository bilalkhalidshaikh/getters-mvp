"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Brain, Rocket, Target } from "lucide-react"
import { useLanguageContext } from "@/components/language-provider"

export function HeroSection() {
  const { translations, isLoaded } = useLanguageContext()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!isLoaded || !mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-background/50 pt-20">
      <div className="absolute inset-0 overflow-hidden">
        {/* Ambient gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C9A86A]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C9A86A]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C9A86A]/3 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Neural network lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C9A86A" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#C9A86A" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="url(#neuralGradient)" strokeWidth="1" />
          <line x1="90%" y1="20%" x2="10%" y2="80%" stroke="url(#neuralGradient)" strokeWidth="1" />
          <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="url(#neuralGradient)" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-[#C9A86A]/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              boxShadow: "0 0 20px rgba(201, 168, 106, 0.4)",
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="inline-flex items-center px-4 py-2 bg-[#C9A86A]/10 border border-[#C9A86A]/30 rounded-full text-sm text-[#C9A86A] backdrop-blur-sm">
            <Zap className="w-4 h-4 mr-2" />
            Next-Generation AI Agency
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
            {translations.hero?.tagline || "We reimagine tomorrow with Autonomous AI."}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            {translations.hero?.description ||
              "Building intelligent systems that think, decide, and act. Autonomous AI that scales your business."}
          </p>

          {/* Four Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
            {[
              { icon: Brain, label: "Build", desc: "AI Systems" },
              { icon: Zap, label: "Automate", desc: "Processes" },
              { icon: Target, label: "Predict", desc: "Outcomes" },
              { icon: Rocket, label: "Scale", desc: "Revenue" },
            ].map((pillar, index) => (
              <div
                key={index}
                className="group p-4 md:p-6 bg-card/40 border border-[#C9A86A]/20 rounded-lg hover:bg-card/60 hover:border-[#C9A86A]/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <pillar.icon className="w-6 h-6 md:w-8 md:h-8 text-[#C9A86A] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground text-sm md:text-base">{pillar.label}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button
              size="lg"
              className="bg-[#C9A86A] hover:bg-[#C9A86A]/90 text-background font-medium px-8 py-4 text-base md:text-lg transition-all duration-200 shadow-lg hover:shadow-[#C9A86A]/50 hover:shadow-xl"
            >
              {translations.hero?.cta1 || "Start Project"}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#C9A86A]/30 hover:bg-[#C9A86A]/10 hover:border-[#C9A86A]/50 px-8 py-4 text-base md:text-lg bg-transparent text-foreground transition-all duration-200"
            >
              {translations.hero?.cta2 || "Get Free AI Audit"}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-[#C9A86A]/20">
            <p className="text-sm text-muted-foreground mb-6">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 opacity-70">
              {["Enterprise", "Startups", "E-commerce", "SaaS", "FinTech"].map((industry) => (
                <div
                  key={industry}
                  className="px-3 md:px-4 py-2 bg-[#C9A86A]/5 border border-[#C9A86A]/20 rounded text-xs md:text-sm text-muted-foreground hover:text-[#C9A86A] transition-colors backdrop-blur-sm"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }
      `}</style>
    </section>
  )
}
