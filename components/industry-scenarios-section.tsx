"use client"

import { useState } from "react"
import { useLanguageContext } from "@/components/language-provider"
import { ChevronRight } from "lucide-react"

export function IndustryScenariosSection() {
  const { translations, isLoaded } = useLanguageContext()
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  if (!isLoaded) return null

  const scenarios = [
    {
      title: "EdTech Adaptive Learning",
      location: "Helsinki",
      problem:
        "Current personalized learning is a lie. Students are bored because the system only branches content — not adapts to cognition.",
      solution:
        "A Getters Learning Architect Agent that detects why a student made a mistake, learns their cognitive style, and autonomously generates new, custom-tailored content in real-time.",
      result: "True adaptive education with 1-to-1 tutor capabilities.",
      titleIt: "EdTech Apprendimento Adattivo",
      locationIt: "Helsinki",
      problemIt:
        "L'apprendimento personalizzato attuale è una bugia. Gli studenti si annoiano perché il sistema ramifica solo i contenuti — non si adatta alla cognizione.",
      solutionIt:
        "Un Agente Learning Architect di Getters che rileva perché uno studente ha commesso un errore, impara il suo stile cognitivo e genera autonomamente contenuti personalizzati in tempo reale.",
      resultIt: "Vera educazione adattiva con capacità di tutor 1-a-1.",
    },
    {
      title: "Non-Profit Donor Transparency",
      location: "Geneva",
      problem: "Donors give money and never know where it went. Transparency reports are unreadable.",
      solution:
        "An Impact Intelligence Agent that tracks every euro from donation to impact, connects financial systems, logistics, GPS, and field data, and autonomously compiles personalized visual reports.",
      result: "Radical transparency rebuilds donor trust and loyalty.",
      titleIt: "Trasparenza dei Donatori No-Profit",
      locationIt: "Ginevra",
      problemIt: "I donatori danno denaro e non sanno mai dove è andato. I rapporti di trasparenza sono illeggibili.",
      solutionIt:
        "Un Agente Impact Intelligence che traccia ogni euro dalla donazione all'impatto, connette sistemi finanziari, logistica, GPS e dati di campo, e compila autonomamente rapporti visivi personalizzati.",
      resultIt: "La trasparenza radicale ricostruisce la fiducia e la lealtà dei donatori.",
    },
    {
      title: "Media & Misinformation Defense",
      location: "Global",
      problem: "Misinformation spreads faster than truth. Fact-checking is reactive.",
      solution:
        "An Agentic Journalist that monitors networks, detects misinformation patterns before virality, cross-references claims with trusted data sources, and autonomously drafts preemptive articles.",
      result: "You don't just fight misinformation; you outthink it.",
      titleIt: "Media e Difesa dalla Disinformazione",
      locationIt: "Globale",
      problemIt: "La disinformazione si diffonde più velocemente della verità. Il fact-checking è reattivo.",
      solutionIt:
        "Un Giornalista Agentivo che monitora le reti, rileva modelli di disinformazione prima della viralità, incrocia i reclami con fonti di dati affidabili e redige autonomamente articoli preventivi.",
      resultIt: "Non combatti solo la disinformazione; la superi.",
    },
    {
      title: "Enterprise Autonomous Operator",
      location: "Zurich",
      problem: "COOs, CISOs, and executives are drowning in AI tools that only summarize data.",
      solution:
        "A Cognitive Operator Agent that thinks like a seasoned expert, predicts disruptions before they occur, executes end-to-end resolutions autonomously across systems, and provides auditable logs.",
      result: "Decision execution, not data visualization.",
      titleIt: "Operatore Autonomo Aziendale",
      locationIt: "Zurigo",
      problemIt: "I COO, i CISO e i dirigenti sono sommersi da strumenti di IA che riassumono solo i dati.",
      solutionIt:
        "Un Agente Cognitive Operator che pensa come un esperto stagionato, prevede le interruzioni prima che si verifichino, esegue autonomamente risoluzioni end-to-end su sistemi e fornisce log verificabili.",
      resultIt: "Esecuzione delle decisioni, non visualizzazione dei dati.",
    },
    {
      title: "Pharmaceutical Drug Discovery",
      location: "New Jersey",
      problem: "$2B, 10-year development cycles. Bottleneck: hypothesis generation.",
      solution:
        "A scientific agent that autonomously reads global biomedical literature, designs experiments, predicts outcomes, and runs simulations across data lakes.",
      result: "Hypothesis-to-validation in days, not decades.",
      titleIt: "Scoperta di Farmaci Farmaceutici",
      locationIt: "New Jersey",
      problemIt: "$2B, cicli di sviluppo di 10 anni. Collo di bottiglia: generazione di ipotesi.",
      solutionIt:
        "Un agente scientifico che legge autonomamente la letteratura biomedica globale, progetta esperimenti, prevede i risultati ed esegue simulazioni su data lake.",
      resultIt: "Dall'ipotesi alla validazione in giorni, non decenni.",
    },
    {
      title: "Supply Chain Disruption",
      location: "Rotterdam",
      problem: "72-hour lag to respond to port closures.",
      solution:
        "A logistics agent that monitors ship telemetry, manifests, customs docs, and weather to predict disruptions and autonomously re-book shipments.",
      result: "$10M saved per event, zero downtime.",
      titleIt: "Interruzione della Catena di Approvvigionamento",
      locationIt: "Rotterdam",
      problemIt: "Ritardo di 72 ore per rispondere alle chiusure portuali.",
      solutionIt:
        "Un agente logistico che monitora la telemetria delle navi, i manifesti, i documenti doganali e il meteo per prevedere le interruzioni e riprenota autonomamente le spedizioni.",
      resultIt: "$10M risparmiati per evento, zero tempi di inattività.",
    },
  ]

  const isItalian = translations.nav?.home === "Home" ? false : true

  return (
    <section id="scenarios" className="relative py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {isItalian ? "Scenari Industriali" : "Industry Scenarios"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isItalian
              ? "Problemi reali ad alto rischio e come gli agenti Getters li risolvono autonomamente."
              : "Real-world high-stakes problems and how Getters agents autonomously solve them."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className="group relative bg-card/40 border border-border/50 rounded overflow-hidden transition-smooth hover:border-accent/50 cursor-pointer"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.08}s both`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none"></div>

              <div className="relative z-10 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {isItalian ? scenario.titleIt : scenario.title}
                    </h3>
                    <p className="text-sm text-accent font-medium mt-1">
                      {isItalian ? scenario.locationIt : scenario.location}
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-accent transition-transform ${expandedIndex === index ? "rotate-90" : ""}`}
                  />
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  <span className="font-semibold text-foreground">Problem:</span>{" "}
                  {isItalian ? scenario.problemIt : scenario.problem}
                </p>

                {expandedIndex === index && (
                  <div className="space-y-4 pt-4 border-t border-border/30 animate-fade-in">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Solution:</span>{" "}
                        {isItalian ? scenario.solutionIt : scenario.solution}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-accent">Result:</span>{" "}
                        {isItalian ? scenario.resultIt : scenario.result}
                      </p>
                    </div>
                  </div>
                )}
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
