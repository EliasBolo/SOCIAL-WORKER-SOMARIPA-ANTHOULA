import { Navigation } from "@/components/navigation"
import { SkipLink } from "@/components/skip-link"
import { StructuredData } from "@/components/structured-data"
import { HeroSection } from "@/components/hero-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <StructuredData />
      <SkipLink />
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <div className="px-4 sm:px-6" aria-hidden="true">
          <div className="mx-auto flex max-w-3xl items-center justify-center py-2 sm:py-4">
            <div className="h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
        </div>
        <ExpertiseSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
