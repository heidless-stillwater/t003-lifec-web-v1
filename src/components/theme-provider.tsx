
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"

import { appThemes, type ThemeDefinition, type ThemeMode, type ThemeCategory, defaultTheme } from '@/lib/themes'

type CustomThemeProviderProps = {
  children: React.ReactNode
  defaultMode?: ThemeMode
  defaultThemeName?: string
  defaultCategory?: ThemeCategory
  storageKey?: string
}

type CustomThemeProviderState = {
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
  toggleMode: () => void
  colorTheme: string
  setColorTheme: (category: ThemeCategory, name: string) => void
  category: ThemeCategory
  currentThemeDef?: ThemeDefinition | null,
}

const initialState: CustomThemeProviderState = {
  mode: defaultTheme.mode,
  setMode: () => null,
  toggleMode: () => null,
  colorTheme: defaultTheme.name,
  setColorTheme: () => null,
  category: defaultTheme.category,
}

const CustomThemeProviderContext = React.createContext<CustomThemeProviderState>(initialState)

function CustomThemeProvider({
  children,
  defaultMode = defaultTheme.mode,
  defaultThemeName = defaultTheme.name,
  defaultCategory = defaultTheme.category,
  storageKey = 'app-ui-theme',
  ...props
}: CustomThemeProviderProps) {
  const { theme: mode, setTheme: setNextTheme } = useNextTheme()
  const [colorTheme, setColorThemeState] = React.useState(defaultThemeName)
  const [category, setCategory] = React.useState<ThemeCategory>(defaultCategory)

  React.useEffect(() => {
    let storedTheme: { colorTheme: string; category: ThemeCategory } | null = null;
    try {
      const stored = localStorage.getItem(storageKey)
      if (stored) {
        storedTheme = JSON.parse(stored);
      }
    } catch (error) {
      console.warn('Failed to load theme from localStorage:', error);
    }

    if (storedTheme) {
      setColorThemeState(storedTheme.colorTheme);
      setCategory(storedTheme.category);
    }
  }, [storageKey]);

  const currentThemeDef = React.useMemo(() => {
    return Object.values(appThemes).flat().find(t => t.name === colorTheme);
  }, [colorTheme]);

  React.useEffect(() => {
    if (!currentThemeDef) return;

    const root = document.documentElement;
    const theme = currentThemeDef[mode as ThemeMode];

    for (const [key, value] of Object.entries(theme)) {
        root.style.setProperty(key, value);
    }

    try {
      localStorage.setItem(storageKey, JSON.stringify({ colorTheme, category }))
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error)
    }

  }, [mode, colorTheme, category, currentThemeDef]);

  const setColorTheme = (newCategory: ThemeCategory, newThemeName: string) => {
    setCategory(newCategory);
    setColorThemeState(newThemeName);
  }

  const setMode = (newMode: ThemeMode) => {
    setNextTheme(newMode)
  }

  const toggleMode = () => {
    setNextTheme(mode === 'light' ? 'dark' : 'light');
  }

  return (
    <CustomThemeProviderContext.Provider 
      {...props} 
      value={{ mode: mode as ThemeMode, setMode, colorTheme, setColorTheme, category, currentThemeDef, toggleMode }}
    >
      {children}
    </CustomThemeProviderContext.Provider>
  )
}


export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
    >
      <CustomThemeProvider {...props}>
        {children}
      </CustomThemeProvider>
    </NextThemesProvider>
  )
}


export const useTheme = () => {
  const context = React.useContext(CustomThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}
