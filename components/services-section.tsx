"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bot, Code, BarChart3, Workflow, Palette, ArrowRight, Sparkles } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Bot,
      title: "AI Agent Development",
      description:
        "Custom autonomous AI agents that handle complex business processes, customer interactions, and decision-making with human-level intelligence.",
      features: ["Conversational AI", "Process Automation", "Decision Trees", "Multi-modal AI"],
      color: "from-primary to-primary/60",
    },
    {
      icon: Code,
      title: "Full-Stack Engineering",
      description:
        "End-to-end development of scalable web applications, mobile apps, and enterprise systems with modern tech stacks.",
      features: ["React/Next.js", "Node.js/Python", "Cloud Architecture", "API Development"],
      color: "from-secondary to-secondary/60",
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      description:
        "Transform raw data into actionable insights with advanced analytics, machine learning models, and predictive intelligence.",
      features: ["Predictive Analytics", "ML Models", "Data Pipelines", "Business Intelligence"],
      color: "from-accent to-accent/60",
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description:
        "Streamline operations with intelligent automation that eliminates manual tasks and optimizes workflow efficiency.",
      features: ["Workflow Design", "RPA Integration", "API Orchestration", "Smart Triggers"],
      color: "from-chart-4 to-chart-4/60",
    },
    {
      icon: Palette,
      title: "Creative AI Solutions",
      description:
        "Leverage generative AI for content creation, design automation, and brand personalization at scale.",
      features: ["Content Generation", "Design Automation", "Brand Personalization", "Creative Workflows"],
      color: "from-chart-5 to-chart-5/60",
    },
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            Autonomous Systems That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Drive Results
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            We architect intelligent solutions that transform how businesses operate, delivering measurable impact
            through cutting-edge AI technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              <CardHeader className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative">
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <Badge
                      key={featureIndex}
                      variant="secondary"
                      className="text-xs bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 transition-colors"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4">
              Discuss Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-card px-8 py-4 bg-transparent">
              View All Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
