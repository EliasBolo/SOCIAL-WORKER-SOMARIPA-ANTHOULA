import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Πολιτική Απορρήτου | Privacy Policy",
  description:
    "Πολιτική Απορρήτου - Ανθούλα Σωμαρίπα, Κλινική Κοινωνική Λειτουργός, Αθήνα, Αττική. Πληροφορίες για τη συλλογή, χρήση και προστασία των προσωπικών σας δεδομένων σύμφωνα με τον GDPR. Privacy Policy - Anthoula Somaripa, Clinical Social Worker, Athens, Attica.",
  keywords: [
    "Πολιτική Απορρήτου",
    "GDPR",
    "Προστασία Δεδομένων",
    "Privacy Policy",
    "Data Protection",
    "Ανθούλα Σωμαρίπα",
    "Αθήνα",
    "Αττική",
    "Athens",
    "Attica",
  ],
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
