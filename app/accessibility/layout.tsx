import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Πολιτική Προσβασιμότητας | Accessibility Policy",
  description:
    "Πολιτική Προσβασιμότητας - Ανθούλα Σωμαρίπα, Κλινική Κοινωνική Λειτουργός, Αθήνα, Αττική. Δέσμευση για προσβάσιμο ιστότοπο σύμφωνα με τα πρότυπα WCAG 2.1 AA. Accessibility Policy - Anthoula Somaripa, Clinical Social Worker, Athens, Attica. WCAG 2.1 AA compliance.",
  keywords: [
    "Πολιτική Προσβασιμότητας",
    "Προσβασιμότητα",
    "WCAG 2.1",
    "Accessibility Policy",
    "Web Accessibility",
    "Ανθούλα Σωμαρίπα",
    "Αθήνα",
    "Αττική",
    "Athens",
    "Attica",
  ],
}

export default function AccessibilityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
