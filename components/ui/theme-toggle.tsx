'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flex items-center text-muted-foreground"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-[1rem] w-[1rem]" />
      ) : (
        <Moon className="h-[1rem] w-[1rem]" />
      )}
    </button>
  )
}