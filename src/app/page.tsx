"use client"

import * as React from "react"

export default function Home() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex items-center justify-center p-8 min-h-[50vh]">
      <div className="text-center">
        <h1 className="font-heading text-3xl font-black tracking-tight text-primary dark:text-accent">
          Refuse Shine Cleaning LTD
        </h1>
        <p className="mt-2 text-text-gray dark:text-muted-foreground text-sm">
          Navbar and Footer are integrated. Switch themes above to test light and dark modes.
        </p>
      </div>
    </div>
  )
}
