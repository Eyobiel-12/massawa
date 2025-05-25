"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "nl"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string, defaultValue?: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

import { getTranslation } from "@/lib/translations"

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Try to get saved language from localStorage or use browser language, default to English
  const [language, setLanguage] = useState<Language>("en")

  // Set initial language based on localStorage or browser preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language
      const browserLanguage = navigator.language.substring(0, 2)

      if (savedLanguage && (savedLanguage === "en" || savedLanguage === "nl")) {
        setLanguage(savedLanguage)
      } else if (browserLanguage === "nl") {
        setLanguage("nl")
      }
    }
  }, [])

  // Save language selection to localStorage when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language)
      // Update HTML lang attribute for accessibility and SEO
      document.documentElement.lang = language
    }
  }, [language])

  // Translation function
  const t = (key: string, defaultValue: string = key): string => {
    return getTranslation(language, key, defaultValue)
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
