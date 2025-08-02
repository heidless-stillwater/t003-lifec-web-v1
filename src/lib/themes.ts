
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
    {
      name: "Blue",
      swatchColor: "221 83% 53%",
      symbol: "●",
      light: { ...themeTemplate, primary: "221 83% 53%", ring: "221 83% 53%" },
      dark: { ...darkThemeTemplate, primary: "217 91% 60%", ring: "217 91% 60%" },
    },
    {
      name: "Green",
      swatchColor: "142.1 76.2% 36.3%",
      symbol: "●",
      light: { ...themeTemplate, primary: "142.1 76.2% 36.3%", ring: "142.1 76.2% 36.3%" },
      dark: { ...darkThemeTemplate, primary: "142.1 70.6% 45.3%", ring: "142.1 70.6% 45.3%" },
    },
    {
      name: "Red",
      swatchColor: "0 84.2% 60.2%",
      symbol: "●",
      light: { ...themeTemplate, primary: "0 84.2% 60.2%", ring: "0 84.2% 60.2%" },
      dark: { ...darkThemeTemplate, primary: "0 72.2% 50.6%", ring: "0 72.2% 50.6%" },
    },
    {
      name: "Orange",
      swatchColor: "24.6 95% 53.1%",
      symbol: "●",
      light: { ...themeTemplate, primary: "24.6 95% 53.1%", ring: "24.6 95% 53.1%" },
      dark: { ...darkThemeTemplate, primary: "20.5 90.2% 48.2%", ring: "20.5 90.2% 48.2%" },
    },
     {
      name: "Purple",
      swatchColor: "262.1 83.3% 57.8%",
      symbol: "●",
      light: { ...themeTemplate, primary: "262.1 83.3% 57.8%", ring: "262.1 83.3% 57.8%" },
      dark: { ...darkThemeTemplate, primary: "263.4 70% 50.4%", ring: "263.4 70% 50.4%" },
    },
     {
      name: "Pink",
      swatchColor: "332.1 83.3% 57.8%",
      symbol: "●",
      light: { ...themeTemplate, primary: "332.1 83.3% 57.8%", ring: "332.1 83.3% 57.8%" },
      dark: { ...darkThemeTemplate, primary: "333.4 70% 50.4%", ring: "333.4 70% 50.4%" },
    },
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
    {
      name: "Charcoal",
      swatchColor: "0 0% 20%",
      symbol: "●",
      light: { ...themeTemplate, primary: "0 0% 20%", ring: "0 0% 20%" },
      dark: { ...darkThemeTemplate, primary: "0 0% 80%", ring: "0 0% 80%" },
    },
    {
      name: "Slate",
      swatchColor: "215 15% 45%",
      symbol: "■",
      light: { ...themeTemplate, primary: "215 15% 45%", ring: "215 15% 45%" },
      dark: { ...darkThemeTemplate, primary: "215 15% 75%", ring: "215 15% 75%" },
    },
     {
      name: "Stone",
      swatchColor: "30 5% 50%",
      symbol: "★",
      light: { ...themeTemplate, primary: "30 5% 50%", ring: "30 5% 50%" },
      dark: { ...darkThemeTemplate, primary: "30 5% 80%", ring: "30 5% 80%" },
    },
  ],
};

export type ThemeMode = 'light' | 'dark';
export type ThemeCategory = keyof typeof appThemes;

export const defaultTheme = {
  category: 'primaryColorsThemes' as ThemeCategory,
  name: 'Blue',
  mode: 'light' as ThemeMode
};
