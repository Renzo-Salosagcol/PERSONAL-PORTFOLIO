import { useState } from "react"
import { Sun, Moon } from "lucide-react"

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <button> {isDark ? <Sun /> : <Moon />}</button>
    
  )
}