
'use client'

import * as React from 'react'
import { Check, Palette, Sun, Moon, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTheme } from '@/components/theme-provider'
import { appThemes, type ThemeCategory, type ThemeDefinition } from '@/lib/themes'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

const categoryLabels: Record<ThemeCategory, string> = {
  primaryColorsThemes: 'Primary Colors',
  daisyUIThemes: 'DaisyUI Themes',
  bespokeThemes: 'Bespoke',
  greyscaleThemes: 'Greyscale'
}

const categoryIcons: Record<ThemeCategory, string> = {
  primaryColorsThemes: '🎨',
  daisyUIThemes: '🌈',
  bespokeThemes: '✨',
  greyscaleThemes: '⚫'
}

function ThemeColorSwatch({ theme }: { theme: ThemeDefinition }) {
  return (
    <div className='w-4 h-4 rounded-full border border-border' 
         style={{ backgroundColor: `hsl(${theme.swatchColor})` }} />
  )
}

function ModeToggle() {
  const { mode, toggleMode } = useTheme()

  return (
    <div className="flex items-center justify-between px-2 py-1.5">
      <Label htmlFor="dark-mode-toggle" className="flex items-center gap-2 text-sm font-normal">
        {mode === 'light' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        <span>{mode === 'light' ? 'Light' : 'Dark'} Mode</span>
      </Label>
      <Switch 
        id="dark-mode-toggle"
        checked={mode === 'dark'}
        onCheckedChange={toggleMode}
        aria-label="Toggle dark mode"
      />
    </div>
  )
}

function ThemeMenuItem({ theme, category, isActive }: { 
  theme: ThemeDefinition; 
  category: ThemeCategory;
  isActive: boolean;
}) {
  const { setTheme } = useTheme()

  return (
    <DropdownMenuItem
      onClick={() => setTheme(category, theme.name)}
      className="flex items-center justify-between gap-2 cursor-pointer"
    >
      <div className="flex items-center gap-2">
        {theme.symbol && (
          <span className="text-sm font-medium" style={{ color: `hsl(${theme.swatchColor})` }}>
            {theme.symbol}
          </span>
        )}
        <span>{theme.name}</span>
      </div>
      <div className="flex items-center gap-2">
        <ThemeColorSwatch theme={theme} />
        {isActive && <Check className="h-4 w-4" />}
      </div>
    </DropdownMenuItem>
  )
}

export function ThemeSwitcher() {
  const { category, themeName } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60" align="end">
        <ModeToggle />
        <DropdownMenuSeparator />
        
        {(Object.keys(appThemes) as ThemeCategory[]).map((cat) => (
          <DropdownMenuSub key={cat}>
            <DropdownMenuSubTrigger>
              <span className="mr-2">{categoryIcons[cat]}</span>
              <span>{categoryLabels[cat]}</span>
              <ChevronRight className="h-4 w-4 ml-auto" />
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="w-48 max-h-72 overflow-y-auto">
              {appThemes[cat].map((theme) => (
                <ThemeMenuItem
                  key={theme.name}
                  theme={theme}
                  category={cat}
                  isActive={category === cat && themeName === theme.name}
                />
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
