"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguageContext } from "@/components/language-provider"

function CheckCircleIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

type UserType = "enterprise" | "sme" | "innovator" | "government" | null

export function IntelligentContactForm() {
  const { translations, isLoaded } = useLanguageContext()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    userType: "" as UserType,
    details: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  if (!isLoaded) return null

  const isItalian = translations.nav?.home === "Home" ? false : true

  const userTypes = [
    {
      value: "enterprise",
      label: isItalian ? "Azienda Globale" : "Global Enterprise",
      description: isItalian ? "Soluzioni Architetto" : "Solutions Architect",
    },
    {
      value: "sme",
      label: isItalian ? "PMI Europea" : "European SME",
      description: isItalian ? "Team di Lancio Getters" : "Getters Launch Team",
    },
    {
      value: "innovator",
      label: isItalian ? "Innovatore/Fondatore" : "Innovator/Founder",
      description: isItalian ? "Team Getters Lab" : "Getters Lab Team",
    },
    {
      value: "government",
      label: isItalian ? "Governo/Istituzione" : "Government/Institution",
      description: isItalian ? "Team Sistemi Istituzionali" : "Institutional Systems Team",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("https://formspree.io/f/xyzabc123", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          userType: formData.userType,
          details: formData.details,
          language: isItalian ? "Italian" : "English",
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          setFormData({ name: "", email: "", company: "", userType: null, details: "" })
        }, 5000)
      }
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12 animate-fade-in">
        <div className="text-accent mb-4 flex justify-center">
          <CheckCircleIcon />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          {isItalian ? "Messaggio Ricevuto" : "Message Received"}
        </h3>
        <p className="text-muted-foreground">
          {isItalian
            ? "Grazie per aver contattato Getters. Il nostro team ti contatterà presto."
            : "Thank you for reaching out to Getters. Our team will contact you shortly."}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            {isItalian ? "Nome Completo" : "Full Name"}
          </label>
          <Input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-card/40 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-accent/50 transition-smooth"
            placeholder={isItalian ? "Il tuo nome" : "Your name"}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            {isItalian ? "Email" : "Email Address"}
          </label>
          <Input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-card/40 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-accent/50 transition-smooth"
            placeholder={isItalian ? "tuo@email.com" : "your@email.com"}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">{isItalian ? "Azienda" : "Company"}</label>
        <Input
          type="text"
          required
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="bg-card/40 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-accent/50 transition-smooth"
          placeholder={isItalian ? "Nome azienda" : "Company name"}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-3">
          {isItalian ? "Chi Sei?" : "Who Are You?"}
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {userTypes.map((type) => (
            <button
              key={type.value}
              type="button"
              onClick={() => setFormData({ ...formData, userType: type.value as UserType })}
              className={`p-4 rounded border transition-smooth text-left ${
                formData.userType === type.value
                  ? "border-accent/50 bg-accent/10"
                  : "border-border/50 bg-card/40 hover:border-accent/30"
              }`}
            >
              <div className="font-medium text-foreground text-sm">{type.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{type.description}</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          {isItalian ? "Dettagli del Progetto" : "Project Details"}
        </label>
        <textarea
          required
          value={formData.details}
          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          className="w-full px-4 py-3 bg-card/40 border border-border/50 text-foreground placeholder:text-muted-foreground rounded focus:border-accent/50 transition-smooth resize-none"
          rows={4}
          placeholder={isItalian ? "Descrivi il tuo progetto..." : "Describe your project..."}
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium transition-smooth flex items-center justify-center gap-2"
      >
        {isLoading ? (
          isItalian ? (
            "Invio in corso..."
          ) : (
            "Sending..."
          )
        ) : (
          <>
            {isItalian ? "Invia Richiesta" : "Send Request"}
            <ArrowRightIcon />
          </>
        )}
      </Button>
    </form>
  )
}
