import type React from "react"
import { SiteHeader } from "@/components/site-header"

interface PageShellProps {
  eyebrow?: string
  title: string
  description?: string
  children: React.ReactNode
}

export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      <main className="pt-36 pb-24">
        <div className="container mx-auto px-6">
          <header className="max-w-3xl">
            {eyebrow ? (
              <p className="font-mono text-xs tracking-[0.35em] uppercase text-white/40">{eyebrow}</p>
            ) : null}
            <h1 className="mt-4 font-mono text-4xl md:text-6xl tracking-tight uppercase text-balance">{title}</h1>
            {description ? (
              <p className="mt-6 text-base md:text-lg leading-relaxed text-white/60 text-pretty">{description}</p>
            ) : null}
          </header>
          <div className="mt-16">{children}</div>
        </div>
      </main>
    </div>
  )
}
