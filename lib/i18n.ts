"use client"

import { useCallback, useEffect, useState } from "react"

export type Language = "en" | "it"

const DEFAULT_LANGUAGE: Language = "en"
const STORAGE_KEY = "getters-language"

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Load language preference from localStorage
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null
    if (stored && (stored === "en" || stored === "it")) {
      setLanguage(stored)
    }
    setIsLoaded(true)
  }, [])

  const switchLanguage = useCallback((lang: Language) => {
    setLanguage(lang)
    localStorage.setItem(STORAGE_KEY, lang)
  }, [])

  return { language, switchLanguage, isLoaded }
}

export async function loadTranslations(lang: Language) {
  const response = await fetch(`/locales/${lang}.json`)
  return response.json()
}
