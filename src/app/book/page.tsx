import { Navbar } from "@/components/Navbar/navbar"

export default function BookPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-8">
        <h1 className="text-3xl font-black text-primary dark:text-accent">Hi</h1>
      </main>
    </div>
  )
}
