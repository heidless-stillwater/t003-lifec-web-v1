
export interface ThemeDefinition {
  name: string;
  swatchColor: string; // HSL format string
  symbol?: '●' | '■' | '★';
  light: { [key: string]: string };
  dark: { [key: string]: string };
}

export interface AppThemes {
  primaryColorsThemes: ThemeDefinition[];
  daisyUIThemes: ThemeDefinition[];
  bespokeThemes: ThemeDefinition[];
  greyscaleThemes: ThemeDefinition[];
}

const themeTemplate = {
    background: "0 0% 100%",
    foreground: "222.2 84% 4.9%",
    card: "0 0% 100%",
    cardForeground: "222.2 84% 4.9%",
    popover: "0 0% 100%",
    popoverForeground: "222.2 84% 4.9%",
    primary: "222.2 47.4% 11.2%",
    primaryForeground: "210 40% 98%",
    secondary: "210 40% 96.1%",
    secondaryForeground: "210 40% 9.8%",
    muted: "210 40% 96.1%",
    mutedForeground: "215.4 16.3% 46.9%",
    accent: "210 40% 96.1%",
    accentForeground: "210 40% 9.8%",
    destructive: "0 84.2% 60.2%",
    destructiveForeground: "210 40% 98%",
    border: "214.3 31.8% 91.4%",
    input: "214.3 31.8% 91.4%",
    ring: "222.2 84% 4.9%",
}

const darkThemeTemplate = {
    background: "222.2 84% 4.9%",
    foreground: "210 40% 98%",
    card: "222.2 84% 4.9%",
    cardForeground: "210 40% 98%",
    popover: "222.2 84% 4.9%",
    popoverForeground: "210 40% 98%",
    primary: "210 40% 98%",
    primaryForeground: "222.2 47.4% 11.2%",
    secondary: "217.2 32.6% 17.5%",
    secondaryForeground: "210 40% 98%",
    muted: "217.2 32.6% 17.5%",
    mutedForeground: "215 20.2% 65.1%",
    accent: "217.2 32.6% 17.5%",
    accentForeground: "210 40% 98%",
    destructive: "0 62.8% 30.6%",
    destructiveForeground: "210 40% 98%",
    border: "217.2 32.6% 17.5%",
    input: "217.2 32.6% 17.5%",
    ring: "212.7 26.8% 83.9%",
}

export const appThemes: AppThemes = {
  primaryColorsThemes: [
    { name: "Slate", swatchColor: "215 28% 47%", symbol: "●", light: { ...themeTemplate, primary: "215 28% 47%", ring: "215 28% 47%" }, dark: { ...darkThemeTemplate, primary: "215 28% 67%", ring: "215 28% 67%" } },
    { name: "Gray", swatchColor: "220 9% 46%", symbol: "●", light: { ...themeTemplate, primary: "220 9% 46%", ring: "220 9% 46%" }, dark: { ...darkThemeTemplate, primary: "220 9% 66%", ring: "220 9% 66%" } },
    { name: "Zinc", swatchColor: "220 13% 42%", symbol: "●", light: { ...themeTemplate, primary: "220 13% 42%", ring: "220 13% 42%" }, dark: { ...darkThemeTemplate, primary: "220 13% 62%", ring: "220 13% 62%" } },
    { name: "Neutral", swatchColor: "0 0% 45%", symbol: "●", light: { ...themeTemplate, primary: "0 0% 45%", ring: "0 0% 45%" }, dark: { ...darkThemeTemplate, primary: "0 0% 65%", ring: "0 0% 65%" } },
    { name: "Stone", swatchColor: "25 10% 44%", symbol: "●", light: { ...themeTemplate, primary: "25 10% 44%", ring: "25 10% 44%" }, dark: { ...darkThemeTemplate, primary: "25 10% 64%", ring: "25 10% 64%" } },
    { name: "Red", swatchColor: "0 72% 51%", symbol: "●", light: { ...themeTemplate, primary: "0 72% 51%", ring: "0 72% 51%" }, dark: { ...darkThemeTemplate, primary: "0 72% 61%", ring: "0 72% 61%" } },
    { name: "Orange", swatchColor: "25 95% 53%", symbol: "●", light: { ...themeTemplate, primary: "25 95% 53%", ring: "25 95% 53%" }, dark: { ...darkThemeTemplate, primary: "25 95% 63%", ring: "25 95% 63%" } },
    { name: "Amber", swatchColor: "45 93% 47%", symbol: "●", light: { ...themeTemplate, primary: "45 93% 47%", ring: "45 93% 47%" }, dark: { ...darkThemeTemplate, primary: "45 93% 57%", ring: "45 93% 57%" } },
    { name: "Yellow", swatchColor: "54 96% 50%", symbol: "●", light: { ...themeTemplate, primary: "54 96% 50%", ring: "54 96% 50%" }, dark: { ...darkThemeTemplate, primary: "54 96% 60%", ring: "54 96% 60%" } },
    { name: "Lime", swatchColor: "84 94% 47%", symbol: "●", light: { ...themeTemplate, primary: "84 94% 47%", ring: "84 94% 47%" }, dark: { ...darkThemeTemplate, primary: "84 94% 57%", ring: "84 94% 57%" } },
    { name: "Green", swatchColor: "142 76% 36%", symbol: "●", light: { ...themeTemplate, primary: "142 76% 36%", ring: "142 76% 36%" }, dark: { ...darkThemeTemplate, primary: "142 76% 46%", ring: "142 76% 46%" } },
    { name: "Emerald", swatchColor: "158 82% 42%", symbol: "●", light: { ...themeTemplate, primary: "158 82% 42%", ring: "158 82% 42%" }, dark: { ...darkThemeTemplate, primary: "158 82% 52%", ring: "158 82% 52%" } },
    { name: "Teal", swatchColor: "172 80% 38%", symbol: "●", light: { ...themeTemplate, primary: "172 80% 38%", ring: "172 80% 38%" }, dark: { ...darkThemeTemplate, primary: "172 80% 48%", ring: "172 80% 48%" } },
    { name: "Cyan", swatchColor: "188 94% 43%", symbol: "●", light: { ...themeTemplate, primary: "188 94% 43%", ring: "188 94% 43%" }, dark: { ...darkThemeTemplate, primary: "188 94% 53%", ring: "188 94% 53%" } },
    { name: "Sky", swatchColor: "199 98% 48%", symbol: "●", light: { ...themeTemplate, primary: "199 98% 48%", ring: "199 98% 48%" }, dark: { ...darkThemeTemplate, primary: "199 98% 58%", ring: "199 98% 58%" } },
    { name: "Blue", swatchColor: "221 83% 53%", symbol: "●", light: { ...themeTemplate, primary: "221 83% 53%", ring: "221 83% 53%" }, dark: { ...darkThemeTemplate, primary: "221 83% 63%", ring: "221 83% 63%" } },
    { name: "Indigo", swatchColor: "244 81% 60%", symbol: "●", light: { ...themeTemplate, primary: "244 81% 60%", ring: "244 81% 60%" }, dark: { ...darkThemeTemplate, primary: "244 81% 70%", ring: "244 81% 70%" } },
    { name: "Violet", swatchColor: "262 88% 57%", symbol: "●", light: { ...themeTemplate, primary: "262 88% 57%", ring: "262 88% 57%" }, dark: { ...darkThemeTemplate, primary: "262 88% 67%", ring: "262 88% 67%" } },
    { name: "Purple", swatchColor: "283 81% 51%", symbol: "●", light: { ...themeTemplate, primary: "283 81% 51%", ring: "283 81% 51%" }, dark: { ...darkThemeTemplate, primary: "283 81% 61%", ring: "283 81% 61%" } },
    { name: "Fuchsia", swatchColor: "305 81% 51%", symbol: "●", light: { ...themeTemplate, primary: "305 81% 51%", ring: "305 81% 51%" }, dark: { ...darkThemeTemplate, primary: "305 81% 61%", ring: "305 81% 61%" } },
    { name: "Pink", swatchColor: "332 85% 54%", symbol: "●", light: { ...themeTemplate, primary: "332 85% 54%", ring: "332 85% 54%" }, dark: { ...darkThemeTemplate, primary: "332 85% 64%", ring: "332 85% 64%" } },
    { name: "Rose", swatchColor: "347 89% 52%", symbol: "●", light: { ...themeTemplate, primary: "347 89% 52%", ring: "347 89% 52%" }, dark: { ...darkThemeTemplate, primary: "347 89% 62%", ring: "347 89% 62%" } },
  ],
  daisyUIThemes: [
    {
      name: "Cupcake",
      swatchColor: "346 100% 90.8%",
      light: { ...themeTemplate, background: "346 100% 98.2%", primary: "209 68% 62.2%", secondary: "341 84.6% 75.3%", accent: "98 62.4% 80.8%", ring: "209 68% 62.2%" },
      dark: { ...darkThemeTemplate, background: "219 28.6% 11.2%", primary: "209 68% 62.2%", secondary: "341 84.6% 75.3%", accent: "98 62.4% 80.8%", ring: "209 68% 62.2%" },
    },
    {
      name: "Synthwave",
      swatchColor: "253 42.1% 47.8%",
      light: { ...themeTemplate, background: "258 35.1% 14.3%", primary: "302 70.4% 61.2%", secondary: "253 42.1% 47.8%", accent: "22 100% 60.4%", ring: "302 70.4% 61.2%" },
      dark: { ...darkThemeTemplate, background: "258 35.1% 14.3%", foreground: "255 13% 76.5%", primary: "302 70.4% 61.2%", secondary: "253 42.1% 47.8%", accent: "22 100% 60.4%", ring: "302 70.4% 61.2%" },
    },
     {
      name: "Halloween",
      swatchColor: "25 95% 53.1%",
      light: { ...themeTemplate, background: "222.2 84% 4.9%", foreground:"210 40% 98%", primary: "25 95% 53.1%", secondary: "142.1 76.2% 36.3%", accent: "210 40% 98%", ring: "25 95% 53.1%" },
      dark: { ...darkThemeTemplate, background: "222.2 84% 4.9%", foreground:"210 40% 98%", primary: "25 95% 53.1%", secondary: "142.1 76.2% 36.3%", accent: "210 40% 98%", ring: "25 95% 53.1%" },
    },
  ],
  bespokeThemes: [
    {
      name: "Midnight",
      swatchColor: "240 5.9% 10%",
      symbol: "●",
      light: { ...themeTemplate, background: "0 0% 100%", primary: "240 5.9% 10%", ring: "240 5.9% 10%" },
      dark: { ...darkThemeTemplate, background: "240 5.9% 10%", primary: "210 40% 98%", ring: "210 40% 98%" },
    },
    {
      name: "Sunset",
      swatchColor: "15 100% 50%",
      symbol: "■",
      light: { ...themeTemplate, primary: "15 100% 50%", secondary: "34 100% 50%", accent: "51 100% 50%", ring: "15 100% 50%" },
      dark: { ...darkThemeTemplate, primary: "15 100% 50%", secondary: "34 100% 50%", accent: "51 100% 50%", ring: "15 100% 50%" },
    },
     {
      name: "Ocean",
      swatchColor: "205 90% 55%",
      symbol: "★",
      light: { ...themeTemplate, primary: "205 90% 55%", secondary: "190 80% 60%", accent: "180 70% 65%", ring: "205 90% 55%" },
      dark: { ...darkThemeTemplate, primary: "205 90% 55%", secondary: "190 80% 60%", accent: "180 70% 65%", ring: "205 90% 55%" },
    },
  ],
  greyscaleThemes: [
    { name: "Slate", swatchColor: "215 28% 47%", symbol: "●", light: { ...themeTemplate, primary: "215 28% 47%", ring: "215 28% 47%" }, dark: { ...darkThemeTemplate, primary: "215 28% 67%", ring: "215 28% 67%" } },
    { name: "Gray", swatchColor: "220 9% 46%", symbol: "●", light: { ...themeTemplate, primary: "220 9% 46%", ring: "220 9% 46%" }, dark: { ...darkThemeTemplate, primary: "220 9% 66%", ring: "220 9% 66%" } },
    { name: "Zinc", swatchColor: "220 13% 42%", symbol: "●", light: { ...themeTemplate, primary: "220 13% 42%", ring: "220 13% 42%" }, dark: { ...darkThemeTemplate, primary: "220 13% 62%", ring: "220 13% 62%" } },
    { name: "Neutral", swatchColor: "0 0% 45%", symbol: "●", light: { ...themeTemplate, primary: "0 0% 45%", ring: "0 0% 45%" }, dark: { ...darkThemeTemplate, primary: "0 0% 65%", ring: "0 0% 65%" } },
    { name: "Stone", swatchColor: "25 10% 44%", symbol: "●", light: { ...themeTemplate, primary: "25 10% 44%", ring: "25 10% 44%" }, dark: { ...darkThemeTemplate, primary: "25 10% 64%", ring: "25 10% 64%" } },
    { name: "Charcoal", swatchColor: "0 0% 20%", symbol: "■", light: { ...themeTemplate, primary: "0 0% 20%", ring: "0 0% 20%", background: "0 0% 95%", border: "0 0% 85%", input: "0 0% 85%", card: "0 0% 95%", popover: "0 0% 95%" }, dark: { ...darkThemeTemplate, primary: "0 0% 80%", ring: "0 0% 80%", background: "0 0% 10%", border: "0 0% 20%", input: "0 0% 20%", card: "0 0% 10%", popover: "0 0% 10%" } },
    { name: "Steel", swatchColor: "215 15% 45%", symbol: "★", light: { ...themeTemplate, primary: "215 15% 45%", ring: "215 15% 45%", background: "215 15% 95%", border: "215 15% 85%", input: "215 15% 85%", card: "215 15% 95%", popover: "215 15% 95%" }, dark: { ...darkThemeTemplate, primary: "215 15% 75%", ring: "215 15% 75%", background: "215 15% 10%", border: "215 15% 20%", input: "215 15% 20%", card: "215 15% 10%", popover: "215 15% 10%" } },
  ],
};

export type ThemeMode = 'light' | 'dark';
export type ThemeCategory = keyof typeof appThemes;

export const defaultTheme = {
  category: 'primaryColorsThemes' as ThemeCategory,
  name: 'Blue',
  mode: 'light' as ThemeMode
};
