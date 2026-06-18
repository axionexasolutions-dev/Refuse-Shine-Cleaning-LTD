"use client"

import * as React from "react"
import { Hero } from "@/components/Hero/hero"
import { ServicesPreview } from "@/components/Services/services-preview"

export default function Home() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServicesPreview />
    </div>
  )
}

