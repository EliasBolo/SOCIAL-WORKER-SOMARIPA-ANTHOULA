"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col items-center justify-end overflow-hidden px-4 pb-20 text-center sm:px-6 sm:pb-24"
    >
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="pointer-events-none object-cover"
        priority
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-black/30 to-black/45"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-3xl">
        <h1 className="text-balance text-5xl font-medium leading-tight tracking-tight text-white drop-shadow-md sm:text-6xl lg:text-7xl">
          {t("Υπηρεσίες", "Services")}
          <span className="block">
            {t("ψυχοκοινωνικής υποστήριξης", "psychosocial support")}
          </span>
        </h1>
        <a
          href="#about"
          className="group mt-8 inline-flex items-center justify-center text-white/95 transition-colors hover:text-white"
          aria-label={t("Μετάβαση στο βιογραφικό", "Go to about section")}
        >
          <ChevronDown className="h-10 w-10 transition-transform group-hover:translate-y-0.5" />
        </a>
      </div>
    </section>
  )
}
