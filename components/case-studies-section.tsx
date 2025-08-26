"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Target } from "lucide-react"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "E-commerce AI Revolution",
      client: "Global Fashion Retailer",
      challenge: "Manual inventory management and generic customer experiences leading to 40% cart abandonment",
      solution: "Deployed autonomous AI agents for inventory optimization and hyper-personalized shopping experiences",
      results: [
        { metric: "65%", label: "Increase in Conversion Rate" },
        { metric: "40%", label: "Reduction in Cart Abandonment" },
        { metric: "3x", label: "Faster Inventory Turnover" },
      ],
      technologies: ["Machine Learning", "Predictive Analytics", "Recommendation Engine", "Process Automation"],
      gradient: "from-primary to-secondary",
    },
    {
      title: "FinTech Automation Platform",
      client: "Digital Banking Startup",
      challenge: "Manual loan processing taking 14 days with high error rates and customer dissatisfaction",
      solution: "Built intelligent loan processing system with AI-powered risk assessment and automated workflows",
      results: [
        { metric: "90%", label: "Faster Processing Time" },
        { metric: "95%", label: "Accuracy Improvement" },
        { metric: "$2M", label: "Annual Cost Savings" },
      ],
      technologies: ["AI Risk Assessment", "Document Processing", "Workflow Automation", "Compliance AI"],
      gradient: "from-secondary to-accent",
    },
    {
      title: "Healthcare AI Assistant",
      client: "Medical Practice Network",
      challenge: "Overwhelmed staff spending 60% of time on administrative tasks instead of patient care",
      solution:
        "Implemented AI-powered virtual assistants for appointment scheduling, patient triage, and documentation",
      results: [
        { metric: "70%", label: "Reduction in Admin Time" },
        { metric: "45%", label: "Increase in Patient Satisfaction" },
        { metric: "25%", label: "More Patients Served Daily" },
      ],
      technologies: ["Natural Language Processing", "Appointment AI", "Medical Documentation", "Patient Triage"],
      gradient: "from-accent to-chart-4",
    },
  ]

  return (
    <section id="case-studies" className="py-24 bg-gradient-to-b from-card/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-sm text-secondary mb-6">
            <Target className="w-4 h-4 mr-2" />
            Case Studies
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            Real Impact,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              Measurable Results
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            See how we've transformed businesses across industries with autonomous AI solutions that deliver tangible
            ROI and operational excellence.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${study.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              <div className="relative p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                  {/* Problem & Solution */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-2xl font-bold text-foreground">{study.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {study.client}
                        </Badge>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-destructive mb-2 flex items-center">
                            <div className="w-2 h-2 bg-destructive rounded-full mr-2"></div>
                            Challenge
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-secondary mb-2 flex items-center">
                            <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                            Solution
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20"
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
                      <TrendingUp className="w-5 h-5 mr-2 text-accent" />
                      Results Achieved
                    </h4>

                    <div className="space-y-4">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="p-4 bg-background/50 border border-border/50 rounded-lg">
                          <div className="text-2xl font-bold text-accent mb-1">{result.metric}</div>
                          <div className="text-sm text-muted-foreground">{result.label}</div>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="w-full border-primary/20 hover:bg-primary/10 hover:border-primary/40 group-hover:scale-105 transition-all duration-300 bg-transparent"
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
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4">
            See All Case Studies
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
