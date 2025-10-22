"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Target } from "lucide-react"
import { useLanguageContext } from "@/components/language-provider"

export function CaseStudiesSection() {
  const { translations, isLoaded } = useLanguageContext()

  if (!isLoaded) return null

  const caseStudies = translations.caseStudies?.items || []

  const caseStudiesData = [
    {
      challenge: "Manual inventory management and generic customer experiences leading to high cart abandonment",
      solution: "Deployed autonomous AI agents for inventory optimization and hyper-personalized shopping experiences",
      results: [
        { metric: "+65%", label: "Conversion Rate Increase" },
        { metric: "-40%", label: "Cart Abandonment Reduction" },
        { metric: "3x", label: "Faster Inventory Turnover" },
      ],
      technologies: ["Machine Learning", "Predictive Analytics", "Recommendation Engine", "Process Automation"],
    },
    {
      challenge: "Manual loan processing taking 14 days with high error rates and customer dissatisfaction",
      solution: "Built intelligent loan processing system with AI-powered risk assessment and automated workflows",
      results: [
        { metric: "-90%", label: "Processing Time Reduction" },
        { metric: "+95%", label: "Accuracy Improvement" },
        { metric: "$2M", label: "Annual Cost Savings" },
      ],
      technologies: ["AI Risk Assessment", "Document Processing", "Workflow Automation", "Compliance AI"],
    },
    {
      challenge: "Overwhelmed staff spending 60% of time on administrative tasks instead of patient care",
      solution:
        "Implemented AI-powered virtual assistants for appointment scheduling, patient triage, and documentation",
      results: [
        { metric: "-70%", label: "Admin Time Reduction" },
        { metric: "+45%", label: "Patient Satisfaction Increase" },
        { metric: "+25%", label: "More Patients Served Daily" },
      ],
      technologies: ["Natural Language Processing", "Appointment AI", "Medical Documentation", "Patient Triage"],
    },
  ]

  return (
    <section id="case-studies" className="py-24 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary mb-6 backdrop-blur-sm">
            <Target className="w-4 h-4 mr-2" />
            {translations.caseStudies?.title || "Case Studies"}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            {translations.caseStudies?.title || "Results That Speak"}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {translations.caseStudies?.subtitle || "Real outcomes from real clients"}
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study: any, index: number) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-primary/20 bg-card/40 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 hover:border-primary/40"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                  {/* Problem & Solution */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-4 flex-wrap">
                        <h3 className="text-2xl font-bold text-foreground">{study.title}</h3>
                        <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                          {study.metric}
                        </Badge>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-primary mb-2 flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                            Challenge
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">{caseStudiesData[index]?.challenge}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-primary mb-2 flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                            Solution
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">{caseStudiesData[index]?.solution}</p>
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {caseStudiesData[index]?.technologies.map((tech: string, techIndex: number) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-6">
                    <h4 className="font-semibold text-foreground flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                      Results Achieved
                    </h4>

                    <div className="space-y-4">
                      {caseStudiesData[index]?.results.map((result: any, resultIndex: number) => (
                        <div
                          key={resultIndex}
                          className="p-4 bg-primary/5 border border-primary/20 rounded-lg hover:bg-primary/10 transition-colors"
                        >
                          <div className="text-2xl font-bold text-primary mb-1">{result.metric}</div>
                          <div className="text-sm text-muted-foreground">{result.label}</div>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary/50 group-hover:scale-105 transition-all duration-300 bg-transparent text-foreground"
                    >
                      View Full Case Study
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-4 transition-all duration-200 shadow-lg hover:shadow-primary/50 hover:shadow-xl"
          >
            {translations.caseStudies?.viewAll || "See All Case Studies"}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
