"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col items-center justify-end overflow-hidden px-4 pb-16 text-center sm:px-6 sm:pb-20 md:justify-center md:pb-0 md:pt-20"
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
        className="pointer-events-none absolute inset-0 bg-black/20 backdrop-blur-[4px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-black/30 to-black/50"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-3xl md:-mt-6">
        <h1 className="text-balance text-[2.1rem] font-normal leading-[1.08] tracking-tight text-white/95 drop-shadow-[0_4px_14px_rgba(0,0,0,0.5)] sm:text-6xl sm:font-medium lg:text-7xl">
          {t("Υπηρεσίες", "Services")}
          <span className="block">
            {t("ψυχοκοινωνικής υποστήριξης", "psychosocial support")}
          </span>
        </h1>
        <a
          href="#about"
          className="group mt-7 inline-flex items-center justify-center text-white/95 transition-colors hover:text-white"
          aria-label={t("Μετάβαση στο βιογραφικό", "Go to about section")}
        >
          <ChevronDown className="h-10 w-10 transition-transform group-hover:translate-y-0.5" />
        </a>
      </div>
    </section>
  )
}
