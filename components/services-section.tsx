"use client"

import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const services = [
  {
    el: "Ατομική Συμβουλευτική",
    en: "Individual Counseling",
    descEl: "Εξατομικευμένη υποστήριξη για την αντιμετώπιση προσωπικών δυσκολιών σε ένα ασφαλές περιβάλλον.",
    descEn: "Personalized support for addressing personal difficulties in a safe environment.",
  },
  {
    el: "Ομαδική Συμβουλευτική",
    en: "Group Counseling",
    descEl: "Ομαδικές συνεδρίες που προσφέρουν αλληλοϋποστήριξη και ανταλλαγή εμπειριών.",
    descEn: "Group sessions offering mutual support and sharing of experiences.",
  },
  {
    el: "Ψυχοεκπαιδευτικά Σεμινάρια",
    en: "Psychoeducational Seminars",
    descEl: "Εκπαιδευτικά προγράμματα για την ενίσχυση της ψυχικής υγείας και ευεξίας.",
    descEn: "Educational programs for enhancing mental health and well-being.",
  },
  {
    el: "Κατ' Οίκον Επισκέψεις",
    en: "Home Visits",
    descEl: "Ψυχοκοινωνική υποστήριξη μέσω κατ' οίκον επισκέψεων για άτομα με περιορισμένη κινητικότητα.",
    descEn: "Psychosocial support through home visits for individuals with limited mobility.",
  },
  {
    el: "Online Υπηρεσίες",
    en: "Online Services",
    descEl: "Υπηρεσίες ψυχοκοινωνικής υποστήριξης και συμβουλευτικής μέσω διαδικτύου.",
    descEn: "Psychosocial support and counseling services via the internet.",
  },
]

const specializations = [
  {
    el: "Συμβουλευτική για Άτομα που Αντιμετωπίζουν Προβλήματα Υγείας",
    en: "Counseling for Individuals Facing Health Issues",
  },
  {
    el: "Συμβουλευτική για Φροντιστές Ατόμων που Αντιμετωπίζουν Προβλήματα Υγείας",
    en: "Counseling for Caregivers of Individuals with Health Issues",
  },
  {
    el: "Συμβουλευτική για Άτομα Μεγαλύτερης Ηλικίας",
    en: "Counseling for Older Adults",
  },
  {
    el: "Συμβουλευτική Γονέων",
    en: "Parent Counseling",
  },
]

export function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section id="services" className="bg-card px-4 py-16 sm:px-6 sm:py-24" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-medium tracking-wide text-primary uppercase" aria-hidden="true">
          {t("Υπηρεσίες", "Services")}
        </div>
        <h2 id="services-heading" className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {t("Πώς Μπορώ να Βοηθήσω", "How I Can Help")}
        </h2>
        <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {t(
            "Προσφέρω ένα ευρύ φάσμα υπηρεσιών ψυχοκοινωνικής υποστήριξης, προσαρμοσμένων στις ανάγκες κάθε ατόμου.",
            "I offer a wide range of psychosocial support services, tailored to the needs of each individual."
          )}
        </p>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.el}
              className={`flex flex-col bg-card p-8 ${
                index === services.length - 1 && services.length % 3 !== 0
                  ? "sm:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-base font-semibold text-card-foreground">
                {t(service.el, service.en)}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {t(service.descEl, service.descEn)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-xl font-semibold text-foreground">
            {t("Εξειδικεύσεις", "Specializations")}
          </h3>
          <div className="mt-8 space-y-0 divide-y divide-border">
            {specializations.map((spec) => (
              <div
                key={spec.el}
                className="group flex items-center gap-4 py-5 transition-colors"
              >
                <ArrowRight className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                <span className="text-base text-muted-foreground group-hover:text-foreground transition-colors">
                  {t(spec.el, spec.en)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
