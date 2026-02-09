"use client"

import { useLanguage } from "@/lib/language-context"

export function SkipLink() {
  const { t } = useLanguage()

  return (
    <a href="#main-content" className="skip-link">
      {t("Μετάβαση στο κύριο περιεχόμενο", "Skip to main content")}
    </a>
  )
}
