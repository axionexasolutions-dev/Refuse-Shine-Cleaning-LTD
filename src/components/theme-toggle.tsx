"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch by waiting until mounted
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="relative size-9 rounded-full">
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  const isDark = theme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative size-9 rounded-full hover:bg-muted/80 text-foreground transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
    >
      <div className="relative size-5 overflow-hidden">
        {/* Sun Icon */}
        <Sun className={`absolute inset-0 size-full transition-transform duration-500 ease-out ${
          isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`} />
        {/* Moon Icon */}
        <Moon className={`absolute inset-0 size-full transition-transform duration-500 ease-out ${
          isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        }`} />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
