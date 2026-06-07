import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"

export const metadata: Metadata = {
  title: "Portfolio — Studio Pixel",
  description: "Selected works and case studies from Studio Pixel.",
}

const works = [
  { title: "Fashion Studio", category: "Branding", year: "2024" },
  { title: "Architecture Firm", category: "Design", year: "2024" },
  { title: "Product Launch", category: "Creative", year: "2024" },
  { title: "Studio Vale", category: "Marketing", year: "2024" },
  { title: "Automotive", category: "Commercial", year: "2023" },
  { title: "Editorial Series", category: "Photography", year: "2023" },
]

export default function PortfolioPage() {
  return (
    <PageShell
      eyebrow="Selected Works"
      title="Portfolio"
      description="A curated selection of projects spanning branding, design, and creative direction. Placeholder content shown below."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {works.map((work) => (
          <article
            key={work.title}
            className="group rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] transition-colors hover:border-white/30"
          >
            <img
              src={`/placeholder.svg?height=400&width=600&query=${encodeURIComponent(work.title + " black and white editorial")}`}
              alt={work.title}
              className="w-full aspect-[4/3] object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
            />
            <div className="p-6">
              <h2 className="font-mono text-sm tracking-[0.25em] uppercase">{work.title}</h2>
              <div className="mt-3 flex items-center justify-between font-mono text-xs tracking-widest uppercase text-white/40">
                <span>{work.category}</span>
                <span>{work.year}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  )
}
