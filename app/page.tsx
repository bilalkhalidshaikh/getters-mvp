import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { PillarsSection } from "@/components/pillars-section"
import { IndustryScenariosSection } from "@/components/industry-scenarios-section"
import { GettersLabSection } from "@/components/getters-lab-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <PillarsSection />
      <IndustryScenariosSection />
      <GettersLabSection />
      <CaseStudiesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
