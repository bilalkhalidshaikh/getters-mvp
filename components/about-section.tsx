"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguageContext } from "@/components/language-provider"
import { Sparkles, Target, Zap, Shield } from "lucide-react"

export function AboutSection() {
  const { translations, isLoaded } = useLanguageContext()

  if (!isLoaded) return null

  const values = [
    {
      icon: Sparkles,
      title: "Intelligence",
      description: "We build systems that think, learn, and adapt to your business needs.",
    },
    {
      icon: Target,
      title: "Elegance",
      description: "Sophisticated solutions that are simple to use and beautiful to experience.",
    },
    {
      icon: Zap,
      title: "Precision",
      description: "Every detail matters. We engineer with meticulous attention to excellence.",
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Your success is our mission. We're committed to your long-term growth.",
    },
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            {translations.about?.title || "About Getters"}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            {translations.about?.title || "About Getters"}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {translations.about?.mission ||
              "To redefine European businesses through autonomous AI systems that drive measurable impact and sustainable growth."}
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Card className="border-primary/20 bg-card/40 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                {translations.about?.mission ||
                  "To redefine European businesses through autonomous AI systems that drive measurable impact and sustainable growth."}
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-card/40 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where intelligent automation empowers businesses to focus on innovation and human connection,
                while AI handles complexity and operational excellence.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card
                  key={index}
                  className="group border-primary/20 bg-card/40 backdrop-blur-sm hover:bg-card/70 hover:border-primary/40 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-primary/60 w-fit mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-lg p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Based in Milan, Europe</h3>
          <div className="text-center">
            <h4 className="text-xl font-bold text-foreground mb-2">Milan, Italy</h4>
            <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
              Our headquarters and creative hub, where European innovation meets cutting-edge AI excellence. We serve
              clients across Europe and globally with world-class autonomous AI solutions.
            </p>
            <Badge className="bg-primary/20 text-primary border-primary/30">European Headquarters</Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
