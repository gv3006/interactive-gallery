import { Section, SectionHeading } from "./section"

const projects = [
  {
    title: "Neon Horizons",
    summary: "An immersive brand film exploring motion and light. Placeholder summary text for layout purposes.",
    status: "In Progress",
    year: "2024",
  },
  {
    title: "Monochrome Issue 01",
    summary: "Editorial print and digital direction for a quarterly publication. Placeholder summary text.",
    status: "Live",
    year: "2024",
  },
  {
    title: "Form & Function",
    summary: "Product visualization series highlighting industrial design. Placeholder summary text.",
    status: "Archived",
    year: "2023",
  },
  {
    title: "City After Dark",
    summary: "A documentary-style commercial campaign. Placeholder summary text for layout purposes.",
    status: "Live",
    year: "2023",
  },
]

export function ProjectsSection() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="What We Build"
        title="Projects"
        description="A running log of studio projects, experiments, and collaborations. All content below is placeholder."
      />
      <div className="mt-16 divide-y divide-white/10 border-t border-white/10">
        {projects.map((project) => (
          <article
            key={project.title}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 group transition-colors hover:bg-white/[0.02] -mx-6 px-6"
          >
            <div className="md:col-span-1 font-mono text-xs tracking-widest text-white/40">{project.year}</div>
            <div className="md:col-span-7">
              <h3 className="font-mono text-lg tracking-[0.2em] uppercase">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50 text-pretty">{project.summary}</p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <span className="inline-block font-mono text-xs tracking-widest uppercase text-white/60 border border-white/15 rounded-full px-4 py-1">
                {project.status}
              </span>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
