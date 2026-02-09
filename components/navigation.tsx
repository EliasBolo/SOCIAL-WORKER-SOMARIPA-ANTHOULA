"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const navItems = [
  { el: "Αρχική", en: "Home", href: "#home" },
  { el: "Βιογραφικό", en: "About", href: "#about" },
  { el: "Υπηρεσίες", en: "Services", href: "#services" },
  { el: "Επικοινωνία", en: "Contact", href: "#contact" },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-1"
        aria-label={t("Κύρια πλοήγηση", "Main navigation")}
      >
        <a
          href="#home"
        >
          <Image
            src="/images/logo-original.png"
            alt={t("Ανθούλα Σωμαρίπα - Λογότυπο", "Anthoula Somaripa - Logo")}
            width={104}
            height={104}
            className="h-16 w-16 object-contain mix-blend-multiply sm:h-20 sm:w-20 md:h-[104px] md:w-[104px]"
            priority
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {language === "el" ? item.el : item.en}
                </a>
              </li>
            ))}
          </ul>

          {/* Language switcher */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            aria-label={t("Αλλαγή γλώσσας σε Αγγλικά", "Switch language to Greek")}
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            {language === "el" ? "EN" : "EL"}
          </button>
        </div>

        {/* Mobile: lang switcher + toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            aria-label={t("Αλλαγή γλώσσας σε Αγγλικά", "Switch language to Greek")}
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            {language === "el" ? "EN" : "EL"}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? t("Κλείσιμο μενού", "Close menu") : t("Άνοιγμα μενού", "Open menu")}
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`border-t border-border bg-background px-6 pb-6 md:hidden ${mobileOpen ? "block" : "hidden"}`}
        role="region"
        aria-label={t("Μενού πλοήγησης", "Navigation menu")}
      >
        <ul className="flex flex-col gap-1 pt-2" role="list">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {language === "el" ? item.el : item.en}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
