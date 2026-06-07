import { SiteHeader } from "@/components/site-header"
import { WorksGallery } from "@/components/works-gallery"
import { BackToTop } from "@/components/back-to-top"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      {/* Landing hero — Works Gallery */}
      <main className="pt-32 pb-16">
        <WorksGallery />
      </main>

      {/* In-page sections */}
      <PortfolioSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />

      <BackToTop />
    </div>
  )
}
