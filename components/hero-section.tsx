"use client"

import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-12 text-center sm:min-h-[90vh] sm:px-6 sm:pt-20 sm:pb-0"
    >
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="pointer-events-none object-cover opacity-[0.3]"
        loading="lazy"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="mb-8 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-medium tracking-wide text-accent-foreground uppercase">
          {t("Κοινωνική Λειτουργός", "Clinical Social Worker")}
        </div>

        <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {t("Ψυχοκοινωνική Υποστήριξη και Συμβουλευτική", "Psychosocial Support & Counseling")}
        </h1>

        <p className="mt-4 text-lg font-medium text-primary sm:text-xl">
          {t("Κοινωνική Λειτουργός, MSc", "Clinical Social Worker, MSc")}
        </p>

        <p className="mt-1 text-base text-muted-foreground sm:text-lg">
          {t("Σύμβουλος Ψυχικής Υγείας", "Mental Health Counselor")}
        </p>

        <div className="mx-auto mt-10 h-px w-16 bg-primary/30" role="presentation" aria-hidden="true" />

        <a
          href="#about"
          className="group mt-14 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
        >
          {t("Μάθετε Περισσότερα", "Learn More")}
          <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
        </a>
      </div>
    </section>
  )
}
