"use client"

import { useLanguageContext } from "@/components/language-provider"

export function PillarsSection() {
  const { translations, isLoaded } = useLanguageContext()

  if (!isLoaded) return null

  const pillars = [
    {
      title: "Agentic Systems Engineering",
      subtitle: "We build autonomous operators — not dashboards.",
      description:
        "Autonomous agents that perceive, analyze, decide, and act across real systems — from SAP and Oracle layers to modern APIs and robotic environments.",
      titleIt: "Ingegneria dei Sistemi Agentici",
      subtitleIt: "Costruiamo operatori autonomi — non dashboard.",
      descriptionIt:
        "Agenti autonomi che percepiscono, analizzano, decidono e agiscono su sistemi reali — dai livelli SAP e Oracle alle API moderne e agli ambienti robotici.",
    },
    {
      title: "Enterprise Intelligence Integration",
      subtitle: "Your systems think together — or they die separately.",
      description:
        "Full-stack integration of legacy and cloud ecosystems into cohesive intelligent networks capable of autonomous decision-making.",
      titleIt: "Integrazione dell'Intelligenza Aziendale",
      subtitleIt: "I tuoi sistemi pensano insieme — o muoiono separatamente.",
      descriptionIt:
        "Integrazione full-stack di ecosistemi legacy e cloud in reti intelligenti coese capaci di prendere decisioni autonome.",
    },
    {
      title: "Applied Cognitive Architecture",
      subtitle: "We replicate human expert judgment — in code.",
      description:
        "Neural reasoning layers, behavioral learning systems, and domain-specific thought models that enable each agent to think like a 30-year expert.",
      titleIt: "Architettura Cognitiva Applicata",
      subtitleIt: "Replica il giudizio dell'esperto umano — nel codice.",
      descriptionIt:
        "Strati di ragionamento neurale, sistemi di apprendimento comportamentale e modelli di pensiero specifici del dominio che consentono a ogni agente di pensare come un esperto di 30 anni.",
    },
    {
      title: "Secure Execution Framework",
      subtitle: "Every action must be explainable, auditable, and accountable.",
      description:
        "Real-time logs, traceable reasoning graphs, and confidence-level-based execution ensure compliance under critical regulations.",
      titleIt: "Framework di Esecuzione Sicura",
      subtitleIt: "Ogni azione deve essere spiegabile, verificabile e responsabile.",
      descriptionIt:
        "Log in tempo reale, grafici di ragionamento tracciabili ed esecuzione basata su livelli di confidenza garantiscono la conformità alle normative critiche.",
    },
  ]

  const isItalian = translations.nav?.home === "Home" ? false : true

  return (
    <section id="pillars" className="relative py-24 md:py-32 bg-background opacity-100 mt-0 md:pb-32 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {isItalian ? "I Quattro Pilastri dell'Intelligenza" : "The Four Domains of Intelligence"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isItalian
              ? "Ogni pilastro rappresenta un framework di livello europeo per fiducia, cognizione e precisione."
              : "Each pillar represents a European-grade framework for trust, cognition, and precision."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card/40 border border-border/50 rounded hover:border-accent/50 transition-smooth hover:bg-card/60 glass-effect-dark"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-smooth rounded pointer-events-none"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-accent/10 border border-accent/30 rounded mb-6 flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-accent/50 rounded-full"></div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">{isItalian ? pillar.titleIt : pillar.title}</h3>

                <p className="text-accent font-medium text-sm mb-4">
                  {isItalian ? pillar.subtitleIt : pillar.subtitle}
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  {isItalian ? pillar.descriptionIt : pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
