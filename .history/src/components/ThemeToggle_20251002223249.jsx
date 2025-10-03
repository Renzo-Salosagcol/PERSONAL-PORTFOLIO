import { useState } from "react"
import { Sun, Moon } from "lucide-react"

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark", isDark)
  }

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full bg-secondary border border-border hover:bg-accent transition-colors">
      {isDark ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>

  )
}