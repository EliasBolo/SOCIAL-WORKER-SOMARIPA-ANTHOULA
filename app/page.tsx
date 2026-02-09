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
        <ExpertiseSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
