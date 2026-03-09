'use client'

import { createContext, useContext, useState, useEffect, useMemo } from 'react'
import { getSavedTheme, saveTheme } from '@utils'

type Theme = 'light' | 'dark'
type ThemeContextType = {
  theme: Theme
  toggleTheme: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ;(async () => {
      const saved = await getSavedTheme()
      const validTheme =
        saved ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light')
      setTheme(validTheme)
      document.body.classList.toggle('dark', validTheme === 'dark')
      setMounted(true)
    })()
  }, [])

  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.checked ? 'dark' : 'light'
    setTheme(newTheme)
  }

  useEffect(() => {
    if (!mounted) return
    ;(async () => {
      await saveTheme(theme)
      document.body.classList.toggle('dark', theme === 'dark')
    })()
  }, [theme, mounted])

  const value = useMemo(() => ({ theme, toggleTheme }), [theme])

  if (!mounted) return null

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
