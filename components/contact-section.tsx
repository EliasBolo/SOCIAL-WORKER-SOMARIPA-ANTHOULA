"use client"

import React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const { t } = useLanguage()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="px-4 py-16 sm:px-6 sm:py-24" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-medium tracking-wide text-primary uppercase" aria-hidden="true">
          {t("Επικοινωνία", "Contact")}
        </div>
        <h2 id="contact-heading" className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {t("Ας Μιλήσουμε", "Let's Talk")}
        </h2>
        <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {t(
            "Μη διστάσετε να επικοινωνήσετε μαζί μου για οποιαδήποτε απορία ή για να κλείσετε ένα ραντεβού.",
            "Don't hesitate to contact me for any questions or to schedule an appointment."
          )}
        </p>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-primary/20 bg-accent px-8 py-16 text-center" role="status" aria-live="polite">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary" aria-hidden="true">
                  <Send className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {t("Ευχαριστώ για το μήνυμά σας!", "Thank you for your message!")}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t(
                    "Θα επικοινωνήσω μαζί σας το συντομότερο δυνατό.",
                    "I will get back to you as soon as possible."
                  )}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-medium text-primary hover:underline"
                >
                  {t("Αποστολή νέου μηνύματος", "Send a new message")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    {t("Ονοματεπώνυμο", "Full Name")}
                    <span className="text-destructive ml-1" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    aria-required="true"
                    autoComplete="name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                    placeholder={t("Το ονοματεπώνυμό σας", "Your full name")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Email
                    <span className="text-destructive ml-1" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    aria-required="true"
                    autoComplete="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    {t("Μήνυμα", "Message")}
                    <span className="text-destructive ml-1" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    aria-required="true"
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                    placeholder={t("Γράψτε το μήνυμά σας...", "Write your message...")}
                  />
                </div>

                <p className="text-xs text-muted-foreground">
                  <span className="text-destructive" aria-hidden="true">*</span>{" "}
                  {t("Υποχρεωτικά πεδία", "Required fields")}
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  {t("Αποστολή", "Send")}
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>
            )}
          </div>

          <aside className="lg:col-span-2" aria-label={t("Στοιχεία επικοινωνίας", "Contact details")}>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground" aria-hidden="true">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Email</h4>
                  <a href="mailto:info@somaripa.gr" className="mt-1 block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    info@somaripa.gr
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground" aria-hidden="true">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    {t("Τηλέφωνο", "Phone")}
                  </h4>
                  <a href="tel:+30210XXXXXXX" className="mt-1 block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    +30 210 XXX XXXX
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground" aria-hidden="true">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    {t("Τοποθεσία", "Location")}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t("Αθήνα, Ελλάδα", "Athens, Greece")}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground" aria-hidden="true">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    {t("Ώρες Λειτουργίας", "Office Hours")}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t("Δευτέρα – Παρασκευή", "Monday – Friday")}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <time>09:00</time> – <time>18:00</time>
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
