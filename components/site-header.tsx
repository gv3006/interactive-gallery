"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const links = [
  { href: "/portfolio", label: "PORTFOLIO" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/services", label: "SERVICES" },
  { href: "/contact", label: "GET IN TOUCH" },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-8 px-6 py-6">
      <nav className="flex items-center gap-8 text-sm font-mono tracking-wider">
        <Link href="/" className="text-white hover:text-white/60 transition-colors font-semibold">
          STUDIO PIXEL®
        </Link>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "transition-colors",
              pathname === link.href ? "text-white" : "text-white/60 hover:text-white",
            )}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/"
          aria-label="Home"
          className="w-8 h-8 flex items-center justify-center hover:opacity-60 transition-opacity"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="8" height="8" fill="white" />
            <rect x="12" width="8" height="8" fill="white" />
            <rect y="12" width="8" height="8" fill="white" />
            <rect x="12" y="12" width="8" height="8" fill="white" />
          </svg>
        </Link>
      </nav>
    </header>
  )
}
