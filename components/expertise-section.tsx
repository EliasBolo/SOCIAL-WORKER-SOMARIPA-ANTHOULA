"use client"

import {
  Heart,
  Brain,
  HandHeart,
  CloudRain,
  Users,
  Home,
  ShieldAlert,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const areas = [
  {
    el: "Χρόνια Ασθένεια",
    en: "Chronic Illness",
    descEl: "Υποστήριξη ατόμων που αντιμετωπίζουν χρόνιες παθήσεις",
    descEn: "Support for individuals dealing with chronic conditions",
    icon: Heart,
  },
  {
    el: "Άνοια",
    en: "Dementia",
    descEl: "Εξειδικευμένη βοήθεια σε άτομα με άνοια και τις οικογένειές τους",
    descEn: "Specialized help for individuals with dementia and their families",
    icon: Brain,
  },
  {
    el: "Φροντιστές Ασθενών",
    en: "Patient Caregivers",
    descEl: "Ψυχοκοινωνική στήριξη σε φροντιστές ατόμων με προβλήματα υγείας",
    descEn: "Psychosocial support for caregivers of people with health issues",
    icon: HandHeart,
  },
  {
    el: "Απώλεια – Πένθος",
    en: "Loss & Grief",
    descEl: "Συμβουλευτική υποστήριξη σε περιόδους απώλειας και πένθους",
    descEn: "Counseling support during periods of loss and bereavement",
    icon: CloudRain,
  },
  {
    el: "Άτομα Μεγαλύτερης Ηλικίας",
    en: "Older Adults",
    descEl: "Ψυχοκοινωνική φροντίδα για άτομα τρίτης ηλικίας",
    descEn: "Psychosocial care for elderly individuals",
    icon: Users,
  },
  {
    el: "Οικογενειακές Σχέσεις",
    en: "Family Relationships",
    descEl: "Υποστήριξη στη βελτίωση οικογενειακών δυναμικών",
    descEn: "Support in improving family dynamics",
    icon: Home,
  },
  {
    el: "ΚαΠα-Π",
    en: "Child Abuse & Neglect",
    descEl: "Κακοποίηση και Παραμέληση Παιδιών",
    descEn: "Child Abuse and Neglect",
    icon: ShieldAlert,
  },
]

export function ExpertiseSection() {
  const { t } = useLanguage()

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24" aria-labelledby="expertise-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-medium tracking-wide text-primary uppercase" aria-hidden="true">
          {t("Εξειδίκευση", "Expertise")}
        </div>
        <h2 id="expertise-heading" className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {t("Αντιμετώπιση Δυσκολιών", "Addressing Challenges")}
        </h2>
        <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {t(
            "Παροχή εξειδικευμένης ψυχοκοινωνικής υποστήριξης σε ένα ευρύ φάσμα δυσκολιών και προκλήσεων.",
            "Providing specialized psychosocial support across a wide range of difficulties and challenges."
          )}
        </p>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {areas.map((area) => {
            const Icon = area.icon
            return (
              <div
                key={area.el}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-sm"
              >
                <div className="mb-4 inline-flex rounded-lg bg-accent p-2.5 text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-card-foreground">
                  {t(area.el, area.en)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(area.descEl, area.descEn)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
