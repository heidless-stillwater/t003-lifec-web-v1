"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"
import { THEMES } from "@/lib/themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const themeNames = THEMES.map(theme => theme.name)
  
  return <NextThemesProvider 
            attribute="class"
            defaultTheme="system"
            enableSystem
            themes={themeNames}
            {...props}>{children}</NextThemesProvider>
}
