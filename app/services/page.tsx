import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"

export const metadata: Metadata = {
  title: "Services — Studio Pixel",
  description: "Creative services offered by Studio Pixel.",
}

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description: "Logo systems, visual language, and guidelines. Placeholder description text for layout purposes.",
  },
  {
    number: "02",
    title: "Art Direction",
    description: "Concept development and creative direction across media. Placeholder description text.",
  },
  {
    number: "03",
    title: "Motion & Film",
    description: "Brand films, commercials, and animated content. Placeholder description text for layout purposes.",
  },
  {
    number: "04",
    title: "Web & Digital",
    description: "Interactive experiences and digital product design. Placeholder description text.",
  },
]

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="How We Help"
      title="Services"
      description="From brand strategy to final delivery, we craft work across every medium. Placeholder content shown below."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
        {services.map((service) => (
          <div key={service.number} className="bg-black p-10">
            <span className="font-mono text-xs tracking-[0.35em] text-white/30">{service.number}</span>
            <h2 className="mt-6 font-mono text-xl tracking-[0.2em] uppercase">{service.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/50 text-pretty">{service.description}</p>
          </div>
        ))}
      </div>
    </PageShell>
  )
}
