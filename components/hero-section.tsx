"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  function handleSlowScroll() {
    const target = document.querySelector<HTMLElement>("#about")
    if (!target) return

    const startY = window.scrollY
    const targetY = target.getBoundingClientRect().top + window.scrollY
    const distance = targetY - startY
    const durationMs = 1800
    let startTime: number | null = null

    const easeInOutCubic = (time: number) =>
      time < 0.5 ? 4 * time * time * time : 1 - Math.pow(-2 * time + 2, 3) / 2

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / durationMs, 1)
      const easedProgress = easeInOutCubic(progress)

      window.scrollTo({ top: startY + distance * easedProgress })

      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }

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
      <div className="relative z-10 mx-auto max-w-3xl -mt-44 sm:-mt-24 md:-mt-6">
        <h1 className="text-balance text-[2.1rem] font-light leading-[1.08] tracking-[0.02em] text-white/95 drop-shadow-[0_4px_14px_rgba(0,0,0,0.5)] sm:text-6xl sm:font-normal sm:tracking-[0.015em] lg:text-7xl">
          {t("Υπηρεσίες", "Services")}
          <span className="block">
            {t("ψυχοκοινωνικής υποστήριξης", "psychosocial support")}
          </span>
        </h1>
        <button
          type="button"
          onClick={handleSlowScroll}
          className="group mt-16 inline-flex items-center justify-center text-white/95 transition-colors hover:text-white sm:mt-20 lg:mt-24"
          aria-label={t("Μετάβαση στο βιογραφικό", "Go to about section")}
        >
          <ChevronDown className="h-10 w-10 transition-transform group-hover:translate-y-0.5" />
        </button>
      </div>
    </section>
  )
}
