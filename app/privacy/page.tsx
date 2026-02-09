"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export default function PrivacyPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-background px-6 py-16" id="main-content">
      <article className="mx-auto max-w-3xl" aria-labelledby="privacy-heading">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t("Επιστροφή στην Αρχική", "Back to Home")}
        </Link>

        <h1 id="privacy-heading" className="mb-2 text-3xl font-semibold tracking-tight text-foreground">
          {t("Πολιτική Απορρήτου", "Privacy Policy")}
        </h1>
        <p className="mb-10 text-sm text-muted-foreground">
          {t("Τελευταία ενημέρωση: Φεβρουάριος 2026", "Last updated: February 2026")}
        </p>

        <div className="space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              {t("1. Εισαγωγή", "1. Introduction")}
            </h2>
            <p>
              {t(
                "Η προστασία των προσωπικών σας δεδομένων αποτελεί προτεραιότητά μας. Η παρούσα πολιτική απορρήτου εξηγεί ποια δεδομένα συλλέγουμε, πώς τα χρησιμοποιούμε και ποια είναι τα δικαιώματά σας σχετικά με αυτά.",
                "The protection of your personal data is our priority. This privacy policy explains what data we collect, how we use it, and what your rights are regarding this data."
              )}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              {t("2. Δεδομένα που Συλλέγουμε", "2. Data We Collect")}
            </h2>
            <p className="mb-3">
              {t(
                "Κατά τη χρήση αυτού του ιστοτόπου, ενδέχεται να συλλέξουμε τα ακόλουθα δεδομένα:",
                "When using this website, we may collect the following data:"
              )}
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                {t(
                  "Ονοματεπώνυμο και στοιχεία επικοινωνίας (email, τηλέφωνο) που παρέχετε μέσω της φόρμας επικοινωνίας.",
                  "Full name and contact details (email, phone) that you provide through the contact form."
                )}
              </li>
              <li>
                {t(
                  "Πληροφορίες σχετικά με τη συσκευή σας και τη χρήση του ιστοτόπου (cookies, διεύθυνση IP).",
                  "Information about your device and website usage (cookies, IP address)."
                )}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              {t("3. Σκοπός Επεξεργασίας", "3. Purpose of Processing")}
            </h2>
            <p>
              {t(
                "Τα δεδομένα σας χρησιμοποιούνται αποκλειστικά για την επικοινωνία μαζί σας σε σχέση με τα αιτήματά σας, τη βελτίωση των υπηρε��ιών μας και τη συμμόρφωσή μας με τις νομικές μας υποχρεώσεις.",
                "Your data is used exclusively for communicating with you regarding your requests, improving our services, and complying with our legal obligations."
              )}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              {t("4. Προστασία Δεδομένων", "4. Data Protection")}
            </h2>
            <p>
              {t(
                "Λαμβάνουμε κατάλληλα τεχνικά και οργανωτικά μέτρα για την προστασία των προσωπικών σας δεδομένων από μη εξουσιοδοτημένη πρόσβαση, αλλοίωση, αποκάλυψη ή καταστροφή.",
                "We take appropriate technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction."
              )}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              {t("5. Τα Δικαιώματά σας", "5. Your Rights")}
            </h2>
            <p className="mb-3">
              {t(
                "Σύμφωνα με τον Γενικό Κανονισμό Προστασίας Δεδομένων (GDPR), έχετε το δικαίωμα:",
                "In accordance with the General Data Protection Regulation (GDPR), you have the right to:"
              )}
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>{t("Πρόσβασης στα προσωπικά σας δεδομένα.", "Access your personal data.")}</li>
              <li>{t("Διόρθωσης ανακριβών δεδομένων.", "Rectification of inaccurate data.")}</li>
              <li>{t("Διαγραφής των δεδομένων σας.", "Erasure of your data.")}</li>
              <li>{t("Περιορισμού της επεξεργασίας.", "Restriction of processing.")}</li>
              <li>{t("Φορητότητας των δεδομένων σας.", "Data portability.")}</li>
              <li>{t("Εναντίωσης στην επεξεργασία.", "Object to processing.")}</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              {t("6. Επικοινωνία", "6. Contact")}
            </h2>
            <p>
              {t(
                "Για οποιοδήποτε ερώτημα σχετικά με την πολιτική απορρήτου ή τα δεδομένα σας, μπορείτε να επικοινωνήσετε μαζί μας μέσω της ",
                "For any questions regarding the privacy policy or your data, you can contact us through the "
              )}
              <Link href="/#contact" className="text-primary underline underline-offset-4 hover:text-primary/80">
                {t("φόρμας επικοινωνίας", "contact form")}
              </Link>.
            </p>
          </section>
        </div>
      </article>
    </main>
  )
}
