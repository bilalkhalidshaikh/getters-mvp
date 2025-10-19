"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bot, Code, BarChart3, Workflow, Palette, ArrowRight, Sparkles } from 'lucide-react'
import { useLanguageContext } from "@/components/language-provider"

export function ServicesSection() {
  const { translations, isLoaded } = useLanguageContext()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  if (!isLoaded) return null

  const services = translations.services?.items || []

  const serviceIcons = [Bot, Workflow, BarChart3, Code, Palette]
  const serviceFeatures = [
    ["Autonomous Agents", "Decision Making", "Learning Systems", "Multi-modal AI"],
    ["Workflow Design", "RPA Integration", "Smart Triggers", "Process Optimization"],
    ["Predictive Analytics", "ML Models", "Data Pipelines", "Business Intelligence"],
    ["React/Next.js", "Node.js/Python", "Cloud Architecture", "API Development"],
    ["Content Generation", "Design Automation", "Brand Personalization", "Creative Workflows"],
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#C9A86A]/10 border border-[#C9A86A]/30 rounded-full text-sm text-[#C9A86A] mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            {translations.services?.title || "Our Services"}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            {translations.services?.title || "Autonomous Systems That Drive Results"}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {translations.services?.subtitle || "Intelligent solutions engineered for enterprise scale"}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service: any, index: number) => {
            const Icon = serviceIcons[index]
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-[#C9A86A]/20 bg-card/40 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#C9A86A]/20 hover:border-[#C9A86A]/40"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A86A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-[#C9A86A] to-[#C9A86A]/60 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#C9A86A]/30">
                      <Icon className="w-6 h-6 text-background" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-[#C9A86A] group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-[#C9A86A] transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2">
                    {serviceFeatures[index]?.map((feature: string, featureIndex: number) => (
                      <Badge
                        key={featureIndex}
                        variant="secondary"
                        className="text-xs bg-[#C9A86A]/10 text-[#C9A86A] border-[#C9A86A]/20 hover:bg-[#C9A86A]/20 transition-colors"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Industries Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#C9A86A]/10 border border-[#C9A86A]/30 rounded-full text-sm text-[#C9A86A] mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              {translations.industries?.title || "Industries"}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
              {translations.industries?.title || "Industries We Empower"}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              {translations.industries?.subtitle || "Transforming sectors through intelligent automation"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {translations.industries?.items?.map((industry: any, index: number) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-[#C9A86A]/20 bg-card/40 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:scale-105 hover:border-[#C9A86A]/40 p-6 flex flex-col justify-center items-center text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A86A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-[#C9A86A] transition-colors duration-300 mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-muted-foreground transition-colors">
                    {industry.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-[#C9A86A] hover:bg-[#C9A86A]/90 text-background font-medium px-8 py-4 transition-all duration-200 shadow-lg hover:shadow-[#C9A86A]/50 hover:shadow-xl"
            >
              Discuss Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#C9A86A]/30 hover:bg-[#C9A86A]/10 hover:border-[#C9A86A]/50 px-8 py-4 bg-transparent text-foreground transition-all duration-200"
            >
              View All Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
