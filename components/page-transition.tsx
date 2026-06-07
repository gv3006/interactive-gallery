"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  // Holds the content currently displayed; updated after the exit animation.
  const [displayChildren, setDisplayChildren] = useState(children)
  const [stage, setStage] = useState<"in" | "out">("in")
  const pendingChildren = useRef(children)

  // Keep the latest children around so the swap uses fresh content.
  pendingChildren.current = children

  useEffect(() => {
    // On route change, run the exit animation first.
    setStage("out")
  }, [pathname])

  return (
    <div
      key="page-transition"
      data-stage={stage}
      onTransitionEnd={(e) => {
        // Only react to the wrapper's own opacity transition finishing.
        if (e.target !== e.currentTarget || e.propertyName !== "opacity") return
        if (stage === "out") {
          setDisplayChildren(pendingChildren.current)
          setStage("in")
        }
      }}
      className="transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] data-[stage=out]:opacity-0 data-[stage=out]:translate-y-2 data-[stage=in]:opacity-100 data-[stage=in]:translate-y-0"
    >
      {displayChildren}
    </div>
  )
}
