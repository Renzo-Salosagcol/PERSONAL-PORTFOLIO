import { useState } from "react"

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <button> {isDark ? <Sun /> : <Moon />}</button>
    
  )
}