'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Switch } from "@/components/ui/switch"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Switch
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </Switch>
  )
}