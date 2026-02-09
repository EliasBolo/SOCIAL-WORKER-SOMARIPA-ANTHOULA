"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

export type Language = "el" | "en"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (el: string, en: string) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("el")

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "el" ? "en" : "el"))
  }, [])

  const t = useCallback(
    (el: string, en: string) => (language === "el" ? el : en),
    [language]
  )

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
