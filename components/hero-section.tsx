"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Brain, Rocket, Target } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-background/50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating AI Nodes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-primary/60 rounded-full float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <div className="space-y-8">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-8">
            <Zap className="w-4 h-4 mr-2" />
            Next-Generation AI Agency
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
            We reimagine{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent shimmer">
              tomorrow
            </span>{" "}
            with Autonomous AI
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            Getters designs, builds, and deploys autonomous, full-stack, revenue-driving systems to help businesses
            scale faster, smarter, and with zero operational waste.
          </p>

          {/* Four Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            {[
              { icon: Brain, label: "Build", desc: "AI Systems" },
              { icon: Zap, label: "Automate", desc: "Processes" },
              { icon: Target, label: "Predict", desc: "Outcomes" },
              { icon: Rocket, label: "Personalize", desc: "Experiences" },
            ].map((pillar, index) => (
              <div
                key={index}
                className="group p-6 bg-card/50 border border-border/50 rounded-lg hover:bg-card/80 transition-all duration-300 hover:scale-105"
              >
                <pillar.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground">{pillar.label}</h3>
                <p className="text-sm text-muted-foreground">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg pulse-glow"
            >
              Get Free AI Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-card px-8 py-4 text-lg bg-transparent"
            >
              View Case Studies
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-6">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {["Enterprise", "Startups", "E-commerce", "SaaS", "FinTech"].map((industry) => (
                <div key={industry} className="px-4 py-2 bg-card/30 border border-border/30 rounded text-sm">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
