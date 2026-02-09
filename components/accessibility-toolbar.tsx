"use client"

import { useState, useCallback, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"

type FontSize = "default" | "large" | "x-large"
type Contrast = "default" | "high"

export function AccessibilityToolbar() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [fontSize, setFontSize] = useState<FontSize>("default")
  const [contrast, setContrast] = useState<Contrast>("default")
  const [highlightLinks, setHighlightLinks] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  const cycleFontSize = useCallback(() => {
    setFontSize((prev) => {
      if (prev === "default") return "large"
      if (prev === "large") return "x-large"
      return "default"
    })
  }, [])

  const toggleContrast = useCallback(() => {
    setContrast((prev) => (prev === "default" ? "high" : "default"))
  }, [])

  const toggleHighlightLinks = useCallback(() => {
    setHighlightLinks((prev) => !prev)
  }, [])

  const toggleReducedMotion = useCallback(() => {
    setReducedMotion((prev) => !prev)
  }, [])

  const resetAll = useCallback(() => {
    setFontSize("default")
    setContrast("default")
    setHighlightLinks(false)
    setReducedMotion(false)
  }, [])

  useEffect(() => {
    const html = document.documentElement

    html.classList.remove("a11y-font-large", "a11y-font-x-large")
    if (fontSize === "large") html.classList.add("a11y-font-large")
    if (fontSize === "x-large") html.classList.add("a11y-font-x-large")

    html.classList.toggle("a11y-high-contrast", contrast === "high")
    html.classList.toggle("a11y-highlight-links", highlightLinks)
    html.classList.toggle("a11y-reduced-motion", reducedMotion)
  }, [fontSize, contrast, highlightLinks, reducedMotion])

  const hasChanges =
    fontSize !== "default" ||
    contrast !== "default" ||
    highlightLinks ||
    reducedMotion

  const fontSizeLabel =
    fontSize === "default"
      ? t("Κανονικό", "Default")
      : fontSize === "large"
        ? t("Μεγάλο", "Large")
        : t("Πολύ Μεγάλο", "X-Large")

  return (
    <div className="fixed right-5 bottom-20 z-50">
      {isOpen && (
        <div
          className="absolute right-0 bottom-16 w-[calc(100vw-2.5rem)] max-w-72 rounded-xl border border-border bg-card p-4 shadow-lg sm:p-5"
          role="dialog"
          aria-label={t("Εργαλεία Προσβασιμότητας", "Accessibility Tools")}
        >
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-foreground uppercase">
            {t("Προσβασιμότητα", "Accessibility")}
          </h3>

          <div className="flex flex-col gap-3">
            {/* Font Size */}
            <button
              type="button"
              onClick={cycleFontSize}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-foreground transition-colors hover:bg-secondary"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-secondary text-foreground" aria-hidden="true">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M9 3v4m6-4v4M4 11h.01M8 11h8m-8 4h6m-6 4h4" />
                </svg>
              </span>
              <span className="flex flex-col">
                <span className="font-medium">{t("Μέγεθος Γραμμάτων", "Font Size")}</span>
                <span className="text-xs text-muted-foreground">{fontSizeLabel}</span>
              </span>
            </button>

            {/* Contrast */}
            <button
              type="button"
              onClick={toggleContrast}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-secondary ${contrast === "high" ? "bg-primary/10 text-primary" : "text-foreground"}`}
            >
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${contrast === "high" ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"}`} aria-hidden="true">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0 0a9 9 0 010-18m0 18a9 9 0 000-18" />
                </svg>
              </span>
              <span className="font-medium">{t("Υψηλή Αντίθεση", "High Contrast")}</span>
            </button>

            {/* Highlight Links */}
            <button
              type="button"
              onClick={toggleHighlightLinks}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-secondary ${highlightLinks ? "bg-primary/10 text-primary" : "text-foreground"}`}
            >
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${highlightLinks ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"}`} aria-hidden="true">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </span>
              <span className="font-medium">{t("Επισήμανση Συνδέσμων", "Highlight Links")}</span>
            </button>

            {/* Reduced Motion */}
            <button
              type="button"
              onClick={toggleReducedMotion}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-secondary ${reducedMotion ? "bg-primary/10 text-primary" : "text-foreground"}`}
            >
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${reducedMotion ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"}`} aria-hidden="true">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                </svg>
              </span>
              <span className="font-medium">{t("Μείωση Κίνησης", "Reduce Motion")}</span>
            </button>

            {/* Reset */}
            {hasChanges && (
              <button
                type="button"
                onClick={resetAll}
                className="mt-1 rounded-lg border border-border px-3 py-2 text-center text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {t("Επαναφορά", "Reset All")}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label={t("Εργαλεία Προσβασιμότητας", "Accessibility Tools")}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2563EB] text-white shadow-lg transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle cx="12" cy="4.5" r="2" fill="currentColor" stroke="none" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 7.5v4m0 0l-3 5.5m3-5.5l3 5.5M5.5 9.5h13"
          />
        </svg>
      </button>
    </div>
  )
}
