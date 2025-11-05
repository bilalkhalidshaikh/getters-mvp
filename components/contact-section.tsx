"use client"

import { useLanguageContext } from "@/components/language-provider"
import { IntelligentContactForm } from "@/components/intelligent-contact-form"
import { Button } from "@/components/ui/button"

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 5L2 7" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function CheckCircleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

export function ContactSection() {
  const { translations, isLoaded } = useLanguageContext()

  if (!isLoaded) return null

  const isItalian = translations.nav?.home === "Home" ? false : true

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {isItalian ? "Inizia il Tuo Futuro Agentivo" : "Build Your Agentic Future"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isItalian
              ? "Parla con il nostro team di intelligenza per scoprire come gli agenti autonomi possono trasformare la tua organizzazione."
              : "Talk to our intelligence team to discover how autonomous agents can transform your organization."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 p-8 bg-card/40 border border-border/50 rounded glass-effect-dark">
            <h3 className="text-2xl font-bold text-foreground mb-2">{isItalian ? "Contattaci" : "Get in Touch"}</h3>
            <p className="text-muted-foreground mb-8">
              {isItalian
                ? "Seleziona il tuo profilo e il nostro team ti contatterà con la soluzione giusta."
                : "Select your profile and our team will route you to the right solution."}
            </p>
            <IntelligentContactForm />
          </div>

          {/* Contact Info & Benefits */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="p-6 bg-card/40 border border-border/50 rounded glass-effect-dark">
              <h3 className="text-lg font-bold text-foreground mb-6">
                {isItalian ? "Contatti Diretti" : "Direct Contact"}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-accent/10 rounded flex-shrink-0">
                    <MailIcon />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Email</p>
                    <p className="text-sm text-muted-foreground">hello@getters.ai</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-accent/10 rounded flex-shrink-0">
                    <MapPinIcon />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Milan, Italy</p>
                    <p className="text-sm text-muted-foreground">Via della Moscova</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="p-6 bg-card/40 border border-border/50 rounded glass-effect-dark">
              <h3 className="text-lg font-bold text-foreground mb-6">
                {isItalian ? "Cosa Aspettarsi" : "What to Expect"}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      {isItalian ? "Risposta in 24 Ore" : "24-Hour Response"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {isItalian
                        ? "Ti contatteremo entro un giorno lavorativo"
                        : "We'll respond within one business day"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      {isItalian ? "Consulenza Gratuita" : "Free Consultation"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {isItalian
                        ? "Sessione strategica di 30 minuti senza costi"
                        : "30-minute strategy session at no cost"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      {isItalian ? "Proposta Personalizzata" : "Custom Proposal"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {isItalian
                        ? "Soluzione su misura con timeline e prezzi chiari"
                        : "Tailored solution with clear timeline"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="p-6 bg-gradient-accent border border-accent/30 rounded">
              <h3 className="font-bold text-foreground mb-2">
                {isItalian ? "Aiuto Immediato?" : "Need Immediate Help?"}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {isItalian
                  ? "Prenota una chiamata direttamente con il nostro team"
                  : "Schedule a call with our intelligence team"}
              </p>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium transition-smooth text-sm flex items-center justify-center gap-2">
                {isItalian ? "Prenota Chiamata" : "Book Call"}
                <ArrowRightIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
