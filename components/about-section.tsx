"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="px-4 py-16 sm:px-6 sm:py-24" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-medium tracking-wide text-primary uppercase" aria-hidden="true">
          {t("Βιογραφικό", "About")}
        </div>
        <h2 id="about-heading" className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {t("Σχετικά με Εμένα", "About Me")}
        </h2>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-accent">
              <Image
                src="/images/portrait/portrait.avif"
                alt={t(
                  "Ανθούλα Σωμαρίπα - Κλινική Κοινωνική Λειτουργός",
                  "Anthoula Somaripa - Clinical Social Worker"
                )}
                width={600}
                height={750}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                {t(
                  "Είμαι η Ανθούλα Σωμαρίπα, Κλινική Κοινωνική Λειτουργός με μεταπτυχιακό τίτλο σπουδών (MSc) και εξειδίκευση στην ψυχοκοινωνική υποστήριξη και συμβουλευτική.",
                  "I am Anthoula Somaripa, a Clinical Social Worker with a Master's degree (MSc) and specialization in psychosocial support and counseling."
                )}
              </p>
              <p>
                {t(
                  "Με πολυετή εμπειρία στον τομέα της ψυχικής υγείας, προσφέρω εξατομικευμένες υπηρεσίες ψυχοκοινωνικής υποστήριξης σε άτομα και οικογένειες που αντιμετωπίζουν δύσκολες καταστάσεις στη ζωή τους.",
                  "With years of experience in the mental health field, I offer personalized psychosocial support services to individuals and families facing difficult life situations."
                )}
              </p>
              <p>
                {t(
                  "Στόχος μου είναι η δημιουργία ενός ασφαλούς, εμπιστευτικού και υποστηρικτικού περιβάλλοντος, όπου κάθε άτομο μπορεί να εξερευνήσει τις δυσκολίες του και να βρει τρόπους αντιμετώπισης με αξιοπρέπεια και σεβασμό.",
                  "My goal is to create a safe, confidential, and supportive environment where each individual can explore their difficulties and find coping strategies with dignity and respect."
                )}
              </p>
              <p>
                {t(
                  "Η προσέγγισή μου βασίζεται σε σύγχρονες επιστημονικά τεκμηριωμένες μεθόδους, προσαρμοσμένες στις μοναδικές ανάγκες κάθε ατόμου.",
                  "My approach is based on modern evidence-based methods, tailored to the unique needs of each individual."
                )}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { el: "MSc Κοινωνική Εργασία", en: "MSc Social Work" },
                { el: "Σύμβουλος Ψυχικής Υγείας", en: "Mental Health Counselor" },
              ].map((credential) => (
                <span
                  key={credential.el}
                  className="rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-accent-foreground"
                >
                  {t(credential.el, credential.en)}
                </span>
              ))}
            </div>
            <div className="mt-6 text-muted-foreground">
              <p className="text-base font-medium italic">
                {t(
                  "«Με φρόντίδα, ενσυναίσθηση, σεβασμό και αποδοχή.»",
                  "“With care, empathy, respect, and acceptance.”"
                )}
              </p>
              <p className="mt-3 text-sm font-medium text-foreground">
                {t("Ανθούλα Σωμαρίπα", "Anthoula Somaripa")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
