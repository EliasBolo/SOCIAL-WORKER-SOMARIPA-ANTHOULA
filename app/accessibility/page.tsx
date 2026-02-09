"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export default function AccessibilityPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-background px-6 py-16" id="main-content">
      <article className="mx-auto max-w-3xl" aria-labelledby="accessibility-heading">
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

        <h1 id="accessibility-heading" className="mb-2 text-3xl font-semibold tracking-tight text-foreground">
          {t("Πολιτική Προσβασιμότητας", "Accessibility Policy")}
        </h1>
        <p className="mb-10 text-sm text-muted-foreground">
          {t("Τελευταία ενημέρωση: Φεβρουάριος 2026", "Last updated: February 2026")}
        </p>

        <div className="space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              {t("Η Δέσμευσή μας", "Our Commitment")}
            </h2>
            <p>
              {t(
                "Δεσμευόμαστε να διασφαλίσουμε ότι ο ιστότοπός μας είναι προσβάσιμος σε όλους τους ανθρώπους, ανεξαρτήτως αναπηρίας ή τεχνολογικών περιορισμών. Στόχος μας είναι η συμμόρφωση με τις Οδηγίες Προσβασιμότητας Περιεχομένου Ιστού (WCAG) 2.1, Επίπεδο AA.",
                "We are committed to ensuring our website is accessible to all people, regardless of disability or technological limitations. Our goal is compliance with the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA."
              )}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              {t("Μέτρα Προσβασιμότητας", "Accessibility Measures")}
            </h2>
            <p className="mb-3">
              {t(
                "Ο ιστότοπός μας έχει σχεδιαστεί με γνώμονα τις ακόλουθες αρχές προσβασιμότητας:",
                "Our website has been designed with the following accessibility principles in mind:"
              )}
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-foreground">
                  {t("Σημασιολογική δομή HTML:", "Semantic HTML structure:")}
                </strong>{" "}
                {t(
                  "Χρησιμοποιούμε σωστή ιεράρχηση επικεφαλίδων και σημασιολογικά στοιχεία για ευκολότερη πλοήγηση.",
                  "We use proper heading hierarchy and semantic elements for easier navigation."
                )}
              </li>
              <li>
                <strong className="text-foreground">
                  {t("Εναλλακτικό κείμενο:", "Alternative text:")}
                </strong>{" "}
                {t(
                  "Όλες οι εικόνες συνοδεύονται από περιγραφικό εναλλακτικό κείμενο.",
                  "All images are accompanied by descriptive alternative text."
                )}
              </li>
              <li>
                <strong className="text-foreground">
                  {t("Αντίθεση χρωμάτων:", "Color contrast:")}
                </strong>{" "}
                {t(
                  "Διασφαλίζουμε επαρκή αντίθεση μεταξύ κειμένου και φόντου για βέλτιστη αναγνωσιμότητα.",
                  "We ensure sufficient contrast between text and background for optimal readability."
                )}
              </li>
              <li>
                <strong className="text-foreground">
                  {t("Πλοήγηση με πληκτρολόγιο:", "Keyboard navigation:")}
                </strong>{" "}
                {t(
                  "Ο ιστότοπος είναι πλήρως πλοηγήσιμος μέσω πληκτρολογίου.",
                  "The website is fully navigable via keyboard."
                )}
              </li>
              <li>
                <strong className="text-foreground">
                  {t("Ανταποκριτικός σχεδιασμός:", "Responsive design:")}
                </strong>{" "}
                {t(
                  "Ο ιστότοπος λειτουργεί σε όλες τις συσκευές και μεγέθη οθόνης.",
                  "The website works on all devices and screen sizes."
                )}
              </li>
              <li>
                <strong className="text-foreground">
                  {t("Φόρμες:", "Forms:")}
                </strong>{" "}
                {t(
                  "Όλα τα πεδία φόρμας έχουν σαφείς ετικέτες και οδηγίες.",
                  "All form fields have clear labels and instructions."
                )}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              {t("Υποστηριζόμενοι Φυλλομετρητές", "Supported Browsers")}
            </h2>
            <p>
              {t(
                "Ο ιστότοπος έχει δοκιμαστεί και λειτουργεί βέλτιστα στις πιο πρόσφατες εκδόσεις των Google Chrome, Mozilla Firefox, Microsoft Edge και Safari.",
                "The website has been tested and works optimally on the latest versions of Google Chrome, Mozilla Firefox, Microsoft Edge, and Safari."
              )}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              {t("Αναφορά Προβλημάτων", "Report Issues")}
            </h2>
            <p>
              {t(
                "Αν αντιμετωπίσετε οποιοδήποτε πρόβλημα προσβασιμότητας κατά τη χρήση του ιστοτόπου μας, παρακαλούμε επικοινωνήστε μαζί μας μέσω της ",
                "If you encounter any accessibility issues while using our website, please contact us through the "
              )}
              <Link href="/#contact" className="text-primary underline underline-offset-4 hover:text-primary/80">
                {t("φόρμας επικοινωνίας", "contact form")}
              </Link>
              {t(
                ". Θα καταβάλουμε κάθε δυνατή προσπάθεια για να ανταποκριθούμε στο αίτημά σας εντός εύλογου χρονικού διαστήματος.",
                ". We will make every effort to respond to your request within a reasonable time frame."
              )}
            </p>
          </section>
        </div>
      </article>
    </main>
  )
}
