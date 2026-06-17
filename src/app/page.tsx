"use client"

import * as React from "react"
import { Navbar } from "@/components/Navbar/navbar"

export default function Home() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-black tracking-tight">
            Refuse Shine Cleaning LTD
          </h1>
          <p className="mt-2 text-text-gray dark:text-muted-foreground text-sm">
            Navbar is integrated. Switch themes above to test light and dark modes.
          </p>
        </div>
      </main>
    </div>
  )
}
