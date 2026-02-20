"use client"

import { useLanguage } from "@/lib/language-context"

const navItems = [
  { el: "Βιογραφικό", en: "About", href: "#about" },
  { el: "Εξειδίκευση", en: "Expertise", href: "#expertise" },
  { el: "Υπηρεσίες", en: "Services", href: "#services" },
  { el: "Επικοινωνία", en: "Contact", href: "#contact" },
]

export function Navigation() {
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <header className="absolute top-0 left-0 right-0 z-50 text-white">
      <nav
        className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 sm:pt-8"
        aria-label={t("Κύρια πλοήγηση", "Main navigation")}
      >
        <div className="hidden items-start gap-7 lg:gap-8 md:flex">
          <a
            href="#home"
            className="block rounded-full bg-white/95 p-1.5"
            aria-label={t("Αρχή σελίδας", "Back to top")}
          >
            <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white/95 px-2 text-center text-[#4a5f7d] lg:h-32 lg:w-32">
              <p className="text-[13px] leading-tight font-light tracking-[0.01em] lg:text-[14px]">
                Ανθούλα Σωμαρίπα
              </p>
              <p className="mt-1 text-[8px] leading-tight font-light text-[#5a6f8c] lg:text-[8.5px]">
                Κοινωνική Λειτουργός, Μsc
              </p>
              <p className="text-[8px] leading-tight font-light text-[#5a6f8c] lg:text-[8.5px]">
                Σύμβουλος Ψυχικής Υγείας
              </p>
            </div>
          </a>

          <div className="mt-12 flex w-full items-center border-t border-white/65 pt-4">
            <ul className="ml-auto flex items-center gap-7 lg:gap-8" role="list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-xs font-semibold tracking-[0.08em] uppercase text-white/95 transition-colors hover:text-white"
                  >
                    {language === "el" ? item.el : item.en}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={toggleLanguage}
                  className="rounded-full border border-white/60 px-3 py-1 text-[11px] font-semibold tracking-wide text-white/95 transition-colors hover:border-white hover:text-white"
                  aria-label={t("Αλλαγή γλώσσας σε Αγγλικά", "Switch language to Greek")}
                >
                  {language === "el" ? "EN" : "EL"}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center md:hidden">
          <a
            href="#home"
            className="rounded-full bg-white/95 p-1.5"
            aria-label={t("Αρχή σελίδας", "Back to top")}
          >
            <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white/95 px-2 text-center text-[#4a5f7d]">
              <p className="text-[13px] leading-tight font-light tracking-[0.01em]">
                Ανθούλα Σωμαρίπα
              </p>
              <p className="mt-1 text-[8px] leading-tight font-light text-[#5a6f8c]">
                Κοινωνική Λειτουργός, Μsc
              </p>
              <p className="text-[8px] leading-tight font-light text-[#5a6f8c]">
                Σύμβουλος Ψυχικής Υγείας
              </p>
            </div>
          </a>

          <ul className="mt-9 grid w-full max-w-sm grid-cols-2 gap-x-4 gap-y-4 text-center" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-base leading-tight font-light tracking-[0.04em] uppercase text-white/95 transition-colors hover:text-white/80"
                >
                  {language === "el" ? item.el : item.en}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggleLanguage}
            className="mt-5 rounded-full border border-white/70 px-3 py-1.5 text-xs font-semibold tracking-wide text-white/95"
            aria-label={t("Αλλαγή γλώσσας σε Αγγλικά", "Switch language to Greek")}
          >
            {language === "el" ? "EN" : "EL"}
          </button>

          <div className="mt-5 h-px w-full border-t border-white/70" aria-hidden="true" />
        </div>
      </nav>
    </header>
  )
}
