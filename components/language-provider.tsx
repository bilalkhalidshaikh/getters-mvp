"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import type { Language } from "@/lib/i18n"

interface LanguageContextType {
  language: Language
  switchLanguage: (lang: Language) => void
  translations: Record<string, any>
  isLoaded: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [translations, setTranslations] = useState<Record<string, any>>({})
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Load language preference from localStorage
    const stored = localStorage.getItem("getters-language") as Language | null
    const lang = stored && (stored === "en" || stored === "it") ? stored : "en"
    setLanguage(lang)

    // Load translations
    fetch(`/locales/${lang}.json`)
      .then((res) => res.json())
      .then((data) => {
        setTranslations(data)
        setIsLoaded(true)
      })
  }, [])

  const switchLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("getters-language", lang)
    fetch(`/locales/${lang}.json`)
      .then((res) => res.json())
      .then((data) => setTranslations(data))
  }

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, translations, isLoaded }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguageContext() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguageContext must be used within LanguageProvider")
  }
  return context
}
