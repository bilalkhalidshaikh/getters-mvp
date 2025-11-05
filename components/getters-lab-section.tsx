"use client"

import { useLanguageContext } from "@/components/language-provider"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GettersLabSection() {
  const { translations, isLoaded } = useLanguageContext()

  if (!isLoaded) return null

  const services = [
    {
      title: "AI Product Ideation",
      description: "From concept to market-ready AI product strategy.",
      titleIt: "Ideazione di Prodotti AI",
      descriptionIt: "Dalla concezione alla strategia di prodotto AI pronta per il mercato.",
    },
    {
      title: "Agent Design",
      description: "Architecture and behavioral modeling for autonomous systems.",
      titleIt: "Progettazione di Agenti",
      descriptionIt: "Architettura e modellazione comportamentale per sistemi autonomi.",
    },
    {
      title: "Model Training",
      description: "Custom neural networks and domain-specific learning systems.",
      titleIt: "Addestramento del Modello",
      descriptionIt: "Reti neurali personalizzate e sistemi di apprendimento specifici del dominio.",
    },
    {
      title: "System Deployment",
      description: "Production-grade infrastructure and scaling.",
      titleIt: "Distribuzione del Sistema",
      descriptionIt: "Infrastruttura di livello produttivo e scalabilità.",
    },
    {
      title: "Intelligence Tuning",
      description: "Post-launch optimization and continuous improvement.",
      titleIt: "Ottimizzazione dell'Intelligenza",
      descriptionIt: "Ottimizzazione post-lancio e miglioramento continuo.",
    },
  ]

  const isItalian = translations.nav?.home === "Home" ? false : true

  return (
    <section id="lab" className="relative py-24 md:py-32 bg-card/20 border-y border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {isItalian ? "Getters Lab" : "Getters Lab"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {isItalian
                ? "Una divisione specializzata per l'ingegneria personalizzata di prodotti AI. Getters Lab costruisce strumenti AI di livello startup, SaaS e piattaforme autonome per fondatori, aziende e visionari."
                : "A specialized division for custom AI product engineering. Getters Lab builds startup-grade AI tools, SaaS, and autonomous platforms for founders, enterprises, and visionaries."}
            </p>

            <div className="space-y-4 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 rounded border border-accent/30 flex items-center justify-center flex-shrink-0 mt-1 group-hover:border-accent/60 group-hover:bg-accent/10 transition-smooth">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{isItalian ? service.titleIt : service.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {isItalian ? service.descriptionIt : service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium transition-smooth">
              {isItalian ? "Scopri Getters Lab" : "Explore Getters Lab"}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="relative h-96 md:h-full min-h-96 rounded border border-border/50 bg-gradient-overlay glass-effect-dark overflow-hidden group">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded border-2 border-accent/30 flex items-center justify-center">
                  <div className="w-12 h-12 border-2 border-accent/50 rounded-full animate-subtle-glow"></div>
                </div>
                <p className="text-muted-foreground text-sm">
                  {isItalian ? "Ingegneria AI Personalizzata" : "Custom AI Engineering"}
                </p>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
