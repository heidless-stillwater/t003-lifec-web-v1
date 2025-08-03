export type ThemeMode = 'light' | 'dark';
export type ThemeCategory = 'bespokeThemes' | 'primaryColorsThemes' | 'daisyUIThemes' | 'greyscaleThemes' | 'customThemes';

export interface ThemeDefinition {
  name: string;
  category: ThemeCategory;
  symbol?: string;
  swatchColor?: string;
  light: { [key: string]: string };
  dark: { [key: string]: string };
}

export const defaultTheme = {
    name: 'Default',
    mode: 'light' as ThemeMode,
    category: 'primaryColorsThemes' as ThemeCategory
};

export const bespokeThemes: ThemeDefinition[] = [
  {
    name: 'Ruby & Sky',
    category: 'bespokeThemes',
    swatchColor: '197 71% 73%',
    light: { '--background': '180 50% 99%', '--foreground': '0 0% 27%', '--card': '0 0% 100%', '--card-foreground': '0 0% 27%', '--popover': '0 0% 100%', '--popover-foreground': '0 0% 27%', '--primary': '197 71% 73%', '--primary-foreground': '0 0% 27%', '--secondary': '0 0% 75%', '--secondary-foreground': '0 0% 27%', '--muted': '0 0% 75%', '--muted-foreground': '0 0% 40%', '--accent': '350 100% 88%', '--accent-foreground': '0 0% 27%', '--destructive': '9 100% 64%', '--destructive-foreground': '0 0% 100%', '--border': '0 0% 75%', '--input': '0 0% 75%', '--ring': '197 71% 73%', },
    dark: { '--background': '0 0% 10%', '--foreground': '0 0% 90%', '--card': '0 0% 12%', '--card-foreground': '0 0% 90%', '--popover': '0 0% 12%', '--popover-foreground': '0 0% 90%', '--primary': '197 71% 73%', '--primary-foreground': '0 0% 10%', '--secondary': '0 0% 30%', '--secondary-foreground': '0 0% 90%', '--muted': '0 0% 30%', '--muted-foreground': '0 0% 60%', '--accent': '350 100% 88%', '--accent-foreground': '0 0% 10%', '--destructive': '9 100% 64%', '--destructive-foreground': '0 0% 100%', '--border': '0 0% 30%', '--input': '0 0% 30%', '--ring': '197 71% 73%', },
  },
  {
    name: 'Coolish Slate',
    category: 'bespokeThemes',
    swatchColor: '248 80% 66%',
    light: { '--background': '212 22% 95%', '--foreground': '212 25% 22%', '--card': '0 0% 100%', '--card-foreground': '212 25% 22%', '--popover': '0 0% 100%', '--popover-foreground': '212 25% 22%', '--primary': '248 80% 66%', '--primary-foreground': '0 0% 100%', '--secondary': '211 15% 69%', '--secondary-foreground': '212 25% 22%', '--muted': '211 15% 69%', '--muted-foreground': '211 15% 49%', '--accent': '181 100% 41%', '--accent-foreground': '0 0% 100%', '--destructive': '0 84% 60%', '--destructive-foreground': '0 0% 100%', '--border': '211 15% 69%', '--input': '211 15% 69%', '--ring': '248 80% 66%', },
    dark: { '--background': '212 22% 15%', '--foreground': '212 22% 85%', '--card': '212 22% 20%', '--card-foreground': '212 22% 85%', '--popover': '212 22% 20%', '--popover-foreground': '212 22% 85%', '--primary': '248 80% 76%', '--primary-foreground': '212 22% 15%', '--secondary': '211 15% 50%', '--secondary-foreground': '212 22% 85%', '--muted': '211 15% 50%', '--muted-foreground': '211 15% 70%', '--accent': '181 100% 51%', '--accent-foreground': '212 22% 15%', '--destructive': '0 84% 70%', '--destructive-foreground': '0 0% 100%', '--border': '211 15% 50%', '--input': '211 15% 50%', '--ring': '248 80% 76%', },
  },
  {
    name: 'Fuchsia & Cyan',
    category: 'bespokeThemes',
    swatchColor: '330 100% 50%',
    light: { '--background': '0 0% 96%', '--foreground': '0 0% 4%', '--card': '0 0% 88%', '--card-foreground': '0 0% 4%', '--popover': '0 0% 88%', '--popover-foreground': '0 0% 4%', '--primary': '330 100% 50%', '--primary-foreground': '0 0% 96%', '--secondary': '0 0% 50%', '--secondary-foreground': '0 0% 96%', '--muted': '0 0% 50%', '--muted-foreground': '0 0% 40%', '--accent': '180 100% 50%', '--accent-foreground': '0 0% 4%', '--destructive': '0 100% 60%', '--destructive-foreground': '0 0% 96%', '--border': '0 0% 50%', '--input': '0 0% 50%', '--ring': '330 100% 50%', },
    dark: { '--background': '0 0% 4%', '--foreground': '0 0% 96%', '--card': '0 0% 12%', '--card-foreground': '0 0% 96%', '--popover': '0 0% 12%', '--popover-foreground': '0 0% 96%', '--primary': '330 100% 50%', '--primary-foreground': '0 0% 96%', '--secondary': '0 0% 50%', '--secondary-foreground': '0 0% 96%', '--muted': '0 0% 50%', '--muted-foreground': '0 0% 60%', '--accent': '180 100% 50%', '--accent-foreground': '0 0% 4%', '--destructive': '0 100% 60%', '--destructive-foreground': '0 0% 96%', '--border': '0 0% 50%', '--input': '0 0% 50%', '--ring': '330 100% 50%', },
  },
  {
    name: 'Indigo & Amber',
    category: 'bespokeThemes',
    swatchColor: '211 78% 46%',
    light: { '--background': '231 48% 94%', '--foreground': '0 0% 13%', '--card': '0 0% 100%', '--card-foreground': '0 0% 13%', '--popover': '0 0% 100%', '--popover-foreground': '0 0% 13%', '--primary': '211 78% 46%', '--primary-foreground': '0 0% 100%', '--secondary': '0 0% 62%', '--secondary-foreground': '0 0% 13%', '--muted': '0 0% 62%', '--muted-foreground': '0 0% 40%', '--accent': '45 100% 51%', '--accent-foreground': '0 0% 13%', '--destructive': '0 65% 51%', '--destructive-foreground': '0 0% 100%', '--border': '0 0% 62%', '--input': '0 0% 62%', '--ring': '211 78% 46%', },
    dark: { '--background': '0 0% 13%', '--foreground': '231 48% 94%', '--card': '0 0% 10%', '--card-foreground': '231 48% 94%', '--popover': '0 0% 10%', '--popover-foreground': '231 48% 94%', '--primary': '211 78% 66%', '--primary-foreground': '0 0% 13%', '--secondary': '0 0% 30%', '--secondary-foreground': '231 48% 94%', '--muted': '0 0% 30%', '--muted-foreground': '0 0% 70%', '--accent': '45 100% 51%', '--accent-foreground': '0 0% 13%', '--destructive': '0 65% 61%', '--destructive-foreground': '0 0% 13%', '--border': '0 0% 30%', '--input': '0 0% 30%', '--ring': '211 78% 66%', },
  },
  {
    name: 'Indigo Night',
    category: 'bespokeThemes',
    swatchColor: '271 76% 53%',
    light: { '--background': '220 100% 96%', '--foreground': '240 14% 15%', '--card': '220 50% 99%', '--card-foreground': '240 14% 15%', '--popover': '220 50% 99%', '--popover-foreground': '240 14% 15%', '--primary': '271 76% 53%', '--primary-foreground': '220 100% 96%', '--secondary': '263 47% 51%', '--secondary-foreground': '220 100% 96%', '--muted': '263 47% 51%', '--muted-foreground': '240 4% 68%', '--accent': '180 100% 50%', '--accent-foreground': '220 100% 96%', '--destructive': '11 100% 62%', '--destructive-foreground': '220 100% 96%', '--border': '263 47% 51%', '--input': '263 47% 51%', '--ring': '271 76% 53%', },
    dark: { '--background': '240 14% 15%', '--foreground': '220 100% 96%', '--card': '240 11% 20%', '--card-foreground': '220 100% 96%', '--popover': '240 11% 20%', '--popover-foreground': '220 100% 96%', '--primary': '271 76% 53%', '--primary-foreground': '220 100% 96%', '--secondary': '263 47% 51%', '--secondary-foreground': '220 100% 96%', '--muted': '263 47% 51%', '--muted-foreground': '240 4% 68%', '--accent': '180 100% 50%', '--accent-foreground': '220 100% 96%', '--destructive': '11 100% 62%', '--destructive-foreground': '220 100% 96%', '--border': '263 47% 51%', '--input': '263 47% 51%', '--ring': '271 76% 53%', },
  },
  {
    name: 'Emerald Isle',
    category: 'bespokeThemes',
    swatchColor: '134 61% 40%',
    light: { '--background': '120 100% 98%', '--foreground': '210 10% 23%', '--card': '0 0% 100%', '--card-foreground': '210 10% 23%', '--popover': '0 0% 100%', '--popover-foreground': '210 10% 23%', '--primary': '134 61% 40%', '--primary-foreground': '0 0% 100%', '--secondary': '208 7% 48%', '--secondary-foreground': '0 0% 100%', '--muted': '208 7% 48%', '--muted-foreground': '208 7% 30%', '--accent': '211 100% 50%', '--accent-foreground': '0 0% 100%', '--destructive': '354 70% 54%', '--destructive-foreground': '0 0% 100%', '--border': '208 7% 48%', '--input': '208 7% 48%', '--ring': '134 61% 40%', },
    dark: { '--background': '210 10% 15%', '--foreground': '120 100% 98%', '--card': '210 10% 20%', '--card-foreground': '120 100% 98%', '--popover': '210 10% 20%', '--popover-foreground': '120 100% 98%', '--primary': '134 61% 50%', '--primary-foreground': '0 0% 100%', '--secondary': '208 7% 35%', '--secondary-foreground': '0 0% 100%', '--muted': '208 7% 35%', '--muted-foreground': '208 7% 60%', '--accent': '211 100% 60%', '--accent-foreground': '0 0% 100%', '--destructive': '354 70% 64%', '--destructive-foreground': '0 0% 100%', '--border': '208 7% 35%', '--input': '208 7% 35%', '--ring': '134 61% 50%', },
  },
];

export const primaryColorsThemes: ThemeDefinition[] = [
    { name: 'Red', category: 'primaryColorsThemes', light: { '--primary': '0 72% 51%', '--accent': '0 86% 97%' }, dark: { '--primary': '0 72% 51%', '--accent': '0 86% 15%' } },
    { name: 'Orange', category: 'primaryColorsThemes', light: { '--primary': '25 95% 53%', '--accent': '25 86% 97%' }, dark: { '--primary': '25 95% 53%', '--accent': '25 86% 15%' } },
    { name: 'Amber', category: 'primaryColorsThemes', light: { '--primary': '45 93% 47%', '--accent': '45 86% 97%' }, dark: { '--primary': '45 93% 47%', '--accent': '45 86% 15%' } },
    { name: 'Yellow', category: 'primaryColorsThemes', light: { '--primary': '54 96% 50%', '--accent': '54 86% 97%' }, dark: { '--primary': '54 96% 50%', '--accent': '54 86% 15%' } },
    { name: 'Lime', category: 'primaryColorsThemes', light: { '--primary': '84 79% 44%', '--accent': '84 86% 97%' }, dark: { '--primary': '84 79% 44%', '--accent': '84 86% 15%' } },
    { name: 'Green', category: 'primaryColorsThemes', light: { '--primary': '142 76% 36%', '--accent': '142 86% 97%' }, dark: { '--primary': '142 76% 36%', '--accent': '142 86% 15%' } },
    { name: 'Emerald', category: 'primaryColorsThemes', light: { '--primary': '158 79% 41%', '--accent': '158 86% 97%' }, dark: { '--primary': '158 79% 41%', '--accent': '158 86% 15%' } },
    { name: 'Teal', category: 'primaryColorsThemes', light: { '--primary': '173 80% 40%', '--accent': '173 86% 97%' }, dark: { '--primary': '173 80% 40%', '--accent': '173 86% 15%' } },
    { name: 'Cyan', category: 'primaryColorsThemes', light: { '--primary': '190 95% 48%', '--accent': '190 86% 97%' }, dark: { '--primary': '190 95% 48%', '--accent': '190 86% 15%' } },
    { name: 'Sky', category: 'primaryColorsThemes', light: { '--primary': '199 98% 52%', '--accent': '199 86% 97%' }, dark: { '--primary': '199 98% 52%', '--accent': '199 86% 15%' } },
    { name: 'Blue', category: 'primaryColorsThemes', light: { '--primary': '217 91% 60%', '--accent': '217 86% 97%' }, dark: { '--primary': '217 91% 60%', '--accent': '217 86% 15%' } },
    { name: 'Indigo', category: 'primaryColorsThemes', light: { '--primary': '239 84% 67%', '--accent': '239 86% 97%' }, dark: { '--primary': '239 84% 67%', '--accent': '239 86% 15%' } },
    { name: 'Violet', category: 'primaryColorsThemes', light: { '--primary': '259 93% 68%', '--accent': '259 86% 97%' }, dark: { '--primary': '259 93% 68%', '--accent': '259 86% 15%' } },
    { name: 'Purple', category: 'primaryColorsThemes', light: { '--primary': '271 91% 65%', '--accent': '271 86% 97%' }, dark: { '--primary': '271 91% 65%', '--accent': '271 86% 15%' } },
    { name: 'Fuchsia', category: 'primaryColorsThemes', light: { '--primary': '291 89% 65%', '--accent': '291 86% 97%' }, dark: { '--primary': '291 89% 65%', '--accent': '291 86% 15%' } },
    { name: 'Pink', category: 'primaryColorsThemes', light: { '--primary': '322 95% 61%', '--accent': '322 86% 97%' }, dark: { '--primary': '322 95% 61%', '--accent': '322 86% 15%' } },
    { name: 'Rose', category: 'primaryColorsThemes', light: { '--primary': '341 96% 61%', '--accent': '341 86% 97%' }, dark: { '--primary': '341 96% 61%', '--accent': '341 86% 15%' } },
];

export const daisyUIThemes: ThemeDefinition[] = [
  { name: 'Cupcake', category: 'daisyUIThemes', light: { '--primary': '335 60% 50%', '--accent': '335 60% 95%' }, dark: { '--primary': '335 60% 50%', '--accent': '335 60% 15%' } },
  { name: 'Bumblebee', category: 'daisyUIThemes', light: { '--primary': '43 96% 56%', '--accent': '43 96% 95%' }, dark: { '--primary': '43 96% 56%', '--accent': '43 96% 15%' } },
  { name: 'Corporate', category: 'daisyUIThemes', light: { '--primary': '215 25% 27%', '--accent': '215 25% 95%' }, dark: { '--primary': '215 25% 27%', '--accent': '215 25% 15%' } },
  { name: 'Synthwave', category: 'daisyUIThemes', light: { '--primary': '252 82% 62%', '--accent': '303 82% 62%' }, dark: { '--primary': '252 82% 62%', '--accent': '303 82% 20%' } },
  { name: 'Retro', category: 'daisyUIThemes', light: { '--primary': '45 89% 62%', '--accent': '35 89% 95%' }, dark: { '--primary': '45 89% 62%', '--accent': '35 89% 15%' } },
  { name: 'Valentine', category: 'daisyUIThemes', light: { '--primary': '313 77% 65%', '--accent': '313 77% 95%' }, dark: { '--primary': '313 77% 65%', '--accent': '313 77% 15%' } },
  { name: 'Halloween', category: 'daisyUIThemes', light: { '--primary': '23 98% 51%', '--accent': '23 98% 95%' }, dark: { '--primary': '23 98% 51%', '--accent': '23 98% 15%' } },
  { name: 'Garden', category: 'daisyUIThemes', light: { '--primary': '158 64% 52%', '--accent': '158 64% 95%' }, dark: { '--primary': '158 64% 52%', '--accent': '158 64% 15%' } },
  { name: 'Aqua', category: 'daisyUIThemes', light: { '--primary': '192 92% 45%', '--accent': '192 92% 95%' }, dark: { '--primary': '192 92% 45%', '--accent': '192 92% 15%' } },
  { name: 'Lofi', category: 'daisyUIThemes', light: { '--primary': '215 28% 17%', '--accent': '215 28% 95%' }, dark: { '--primary': '215 28% 70%', '--accent': '215 28% 15%' } },
  { name: 'Pastel', category: 'daisyUIThemes', light: { '--primary': '259 93% 68%', '--accent': '259 93% 95%' }, dark: { '--primary': '259 93% 68%', '--accent': '259 93% 15%' } },
  { name: 'Fantasy', category: 'daisyUIThemes', light: { '--primary': '272 49% 49%', '--accent': '272 49% 95%' }, dark: { '--primary': '272 49% 49%', '--accent': '272 49% 15%' } },
  { name: 'Wireframe', category: 'daisyUIThemes', light: { '--primary': '0 0% 45%', '--accent': '0 0% 95%' }, dark: { '--primary': '0 0% 70%', '--accent': '0 0% 15%' } },
  { name: 'Black', category: 'daisyUIThemes', light: { '--primary': '215 28% 17%', '--accent': '215 28% 95%' }, dark: { '--primary': '215 28% 70%', '--accent': '215 28% 15%' } },
  { name: 'Luxury', category: 'daisyUIThemes', light: { '--primary': '43 96% 56%', '--accent': '43 96% 95%' }, dark: { '--primary': '43 96% 56%', '--accent': '43 96% 15%' } },
  { name: 'Dracula', category: 'daisyUIThemes', light: { '--primary': '259 93% 68%', '--accent': '259 93% 95%' }, dark: { '--primary': '259 93% 68%', '--accent': '259 93% 15%' } },
  { name: 'CMYK', category: 'daisyUIThemes', light: { '--primary': '180 100% 50%', '--accent': '180 100% 95%' }, dark: { '--primary': '180 100% 50%', '--accent': '180 100% 15%' } },
  { name: 'Autumn', category: 'daisyUIThemes', light: { '--primary': '23 98% 51%', '--accent': '23 98% 95%' }, dark: { '--primary': '23 98% 51%', '--accent': '23 98% 15%' } },
  { name: 'Business', category: 'daisyUIThemes', light: { '--primary': '215 25% 27%', '--accent': '215 25% 95%' }, dark: { '--primary': '215 25% 70%', '--accent': '215 25% 15%' } },
  { name: 'Acid', category: 'daisyUIThemes', light: { '--primary': '101 100% 36%', '--accent': '101 100% 95%' }, dark: { '--primary': '101 100% 36%', '--accent': '101 100% 15%' } },
  { name: 'Lemonade', category: 'daisyUIThemes', light: { '--primary': '199 89% 48%', '--accent': '199 89% 95%' }, dark: { '--primary': '199 89% 48%', '--accent': '199 89% 15%' } },
  { name: 'Night', category: 'daisyUIThemes', light: { '--primary': '215 28% 17%', '--accent': '215 28% 95%' }, dark: { '--primary': '215 28% 70%', '--accent': '215 28% 15%' } },
  { name: 'Coffee', category: 'daisyUIThemes', light: { '--primary': '43 96% 56%', '--accent': '43 96% 95%' }, dark: { '--primary': '43 96% 56%', '--accent': '43 96% 15%' } },
  { name: 'Winter', category: 'daisyUIThemes', light: { '--primary': '217 91% 60%', '--accent': '217 91% 95%' }, dark: { '--primary': '217 91% 60%', '--accent': '217 91% 15%' } },
];

export const greyscaleThemes: ThemeDefinition[] = [
  { name: 'Charcoal', category: 'greyscaleThemes', light: { '--primary': '0 0% 25%', '--accent': '0 0% 85%' }, dark: { '--primary': '0 0% 70%', '--accent': '0 0% 20%' } },
  { name: 'Slate', category: 'greyscaleThemes', light: { '--primary': '210 10% 40%', '--accent': '210 10% 80%' }, dark: { '--primary': '210 10% 60%', '--accent': '210 10% 20%' } },
  { name: 'Stone', category: 'greyscaleThemes', light: { '--primary': '30 5% 50%', '--accent': '30 5% 90%' }, dark: { '--primary': '30 5% 65%', '--accent': '30 5% 20%' } },
  { name: 'Zinc', category: 'greyscaleThemes', light: { '--primary': '240 5% 60%', '--accent': '240 5% 95%' }, dark: { '--primary': '240 5% 70%', '--accent': '240 5% 20%' } },
  { name: 'Neutral', category: 'greyscaleThemes', light: { '--primary': '0 0% 50%', '--accent': '0 0% 90%' }, dark: { '--primary': '0 0% 80%', '--accent': '0 0% 20%' } },
  { name: 'Gray', category: 'greyscaleThemes', light: { '--primary': '0 0% 50%', '--accent': '0 0% 90%' }, dark: { '--primary': '0 0% 80%', '--accent': '0 0% 20%' } },
];

export const customThemes: ThemeDefinition[] = [
    {
      name: 'SET_1_PALETTE_0',
      category: 'customThemes',
      light: { '--background': '0 0% 97%', '--foreground': '215 28% 17%', '--card': '0 0% 100%', '--card-foreground': '215 28% 17%', '--popover': '0 0% 100%', '--popover-foreground': '215 28% 17%', '--primary': '207 83% 58%', '--primary-foreground': '210 20% 98%', '--secondary': '210 5% 53%', '--secondary-foreground': '215 28% 17%', '--muted': '210 5% 53%', '--muted-foreground': '215 20% 65%', '--accent': '142 67% 44%', '--accent-foreground': '210 20% 98%', '--destructive': '0 86% 56%', '--destructive-foreground': '210 20% 98%', '--border': '210 5% 53%', '--input': '210 5% 53%', '--ring': '207 83% 58%', },
      dark: { '--background': '215 28% 17%', '--foreground': '0 0% 97%', '--card': '215 28% 12%', '--card-foreground': '0 0% 97%', '--popover': '215 28% 12%', '--popover-foreground': '0 0% 97%', '--primary': '207 83% 58%', '--primary-foreground': '210 20% 98%', '--secondary': '210 5% 33%', '--secondary-foreground': '0 0% 97%', '--muted': '210 5% 33%', '--muted-foreground': '215 20% 75%', '--accent': '142 67% 44%', '--accent-foreground': '210 20% 98%', '--destructive': '0 86% 56%', '--destructive-foreground': '210 20% 98%', '--border': '210 5% 33%', '--input': '210 5% 33%', '--ring': '207 83% 58%', },
    },
    {
      name: 'SET_1_PALETTE_1',
      category: 'customThemes',
      light: { '--background': '240 100% 94%', '--foreground': '246 33% 14%', '--card': '240 50% 98%', '--card-foreground': '246 33% 14%', '--popover': '240 50% 98%', '--popover-foreground': '246 33% 14%', '--primary': '246 76% 63%', '--primary-foreground': '240 100% 94%', '--secondary': '244 15% 80%', '--secondary-foreground': '246 33% 14%', '--muted': '244 15% 80%', '--muted-foreground': '244 15% 60%', '--accent': '185 100% 50%', '--accent-foreground': '246 33% 14%', '--destructive': '0 100% 71%', '--destructive-foreground': '240 100% 94%', '--border': '244 15% 80%', '--input': '244 15% 80%', '--ring': '246 76% 63%', },
      dark: { '--background': '246 33% 14%', '--foreground': '240 100% 94%', '--card': '248 23% 21%', '--card-foreground': '240 100% 94%', '--popover': '248 23% 21%', '--popover-foreground': '240 100% 94%', '--primary': '246 76% 63%', '--primary-foreground': '240 100% 94%', '--secondary': '244 15% 60%', '--secondary-foreground': '240 100% 94%', '--muted': '244 15% 60%', '--muted-foreground': '244 15% 40%', '--accent': '185 100% 50%', '--accent-foreground': '246 33% 14%', '--destructive': '0 100% 71%', '--destructive-foreground': '246 33% 14%', '--border': '244 15% 60%', '--input': '244 15% 60%', '--ring': '246 76% 63%', },
    },
    {
      name: 'SET_1_PALETTE_2',
      category: 'customThemes',
      light: { '--background': '28 83% 95%', '--foreground': '27 23% 24%', '--card': '0 0% 100%', '--card-foreground': '27 23% 24%', '--popover': '0 0% 100%', '--popover-foreground': '27 23% 24%', '--primary': '16 100% 66%', '--primary-foreground': '27 23% 24%', '--secondary': '0 0% 64%', '--secondary-foreground': '27 23% 24%', '--muted': '0 0% 64%', '--muted-foreground': '0 0% 40%', '--accent': '120 39% 49%', '--accent-foreground': '0 0% 100%', '--destructive': '0 63% 50%', '--destructive-foreground': '0 0% 100%', '--border': '0 0% 64%', '--input': '0 0% 64%', '--ring': '16 100% 66%', },
      dark: { '--background': '27 23% 14%', '--foreground': '28 83% 95%', '--card': '27 23% 18%', '--card-foreground': '28 83% 95%', '--popover': '27 23% 18%', '--popover-foreground': '28 83% 95%', '--primary': '16 100% 66%', '--primary-foreground': '27 23% 14%', '--secondary': '0 0% 50%', '--secondary-foreground': '28 83% 95%', '--muted': '0 0% 50%', '--muted-foreground': '0 0% 70%', '--accent': '120 39% 49%', '--accent-foreground': '0 0% 100%', '--destructive': '0 63% 50%', '--destructive-foreground': '28 83% 95%', '--border': '0 0% 50%', '--input': '0 0% 50%', '--ring': '16 100% 66%', },
    },
    {
      name: 'SET_1_PALETTE_3',
      category: 'customThemes',
      light: { '--background': '0 0% 99%', '--foreground': '0 0% 13%', '--card': '0 0% 100%', '--card-foreground': '0 0% 13%', '--popover': '0 0% 100%', '--popover-foreground': '0 0% 13%', '--primary': '0 100% 71%', '--primary-foreground': '0 0% 100%', '--secondary': '0 0% 69%', '--secondary-foreground': '0 0% 13%', '--muted': '0 0% 69%', '--muted-foreground': '0 0% 40%', '--accent': '207 89% 53%', '--accent-foreground': '0 0% 100%', '--destructive': '356 70% 54%', '--destructive-foreground': '0 0% 100%', '--border': '0 0% 69%', '--input': '0 0% 69%', '--ring': '0 100% 71%', },
      dark: { '--background': '0 0% 13%', '--foreground': '0 0% 99%', '--card': '0 0% 16%', '--card-foreground': '0 0% 99%', '--popover': '0 0% 16%', '--popover-foreground': '0 0% 99%', '--primary': '0 100% 71%', '--primary-foreground': '0 0% 13%', '--secondary': '0 0% 31%', '--secondary-foreground': '0 0% 99%', '--muted': '0 0% 31%', '--muted-foreground': '0 0% 60%', '--accent': '207 89% 53%', '--accent-foreground': '0 0% 100%', '--destructive': '356 70% 54%', '--destructive-foreground': '0 0% 99%', '--border': '0 0% 31%', '--input': '0 0% 31%', '--ring': '0 100% 71%', },
    },
    {
      name: 'SET_1_PALETTE_4',
      category: 'customThemes',
      light: { '--background': '220 20% 96%', '--foreground': '224 10% 16%', '--card': '0 0% 100%', '--card-foreground': '224 10% 16%', '--popover': '0 0% 100%', '--popover-foreground': '224 10% 16%', '--primary': '248 80% 66%', '--primary-foreground': '0 0% 100%', '--secondary': '220 10% 60%', '--secondary-foreground': '224 10% 16%', '--muted': '220 10% 60%', '--muted-foreground': '220 10% 40%', '--accent': '185 100% 50%', '--accent-foreground': '0 0% 100%', '--destructive': '0 84% 60%', '--destructive-foreground': '0 0% 100%', '--border': '220 10% 60%', '--input': '220 10% 60%', '--ring': '248 80% 66%', },
      dark: { '--background': '224 10% 16%', '--foreground': '220 20% 96%', '--card': '224 10% 20%', '--card-foreground': '220 20% 96%', '--popover': '224 10% 20%', '--popover-foreground': '220 20% 96%', '--primary': '248 80% 66%', '--primary-foreground': '224 10% 16%', '--secondary': '220 10% 40%', '--secondary-foreground': '220 20% 96%', '--muted': '220 10% 40%', '--muted-foreground': '220 10% 60%', '--accent': '185 100% 50%', '--accent-foreground': '224 10% 16%', '--destructive': '0 84% 60%', '--destructive-foreground': '220 20% 96%', '--border': '220 10% 40%', '--input': '220 10% 40%', '--ring': '248 80% 66%', },
    },
    {
      name: 'SET_1_PALETTE_5',
      category: 'customThemes',
      light: { '--background': '0 0% 99%', '--foreground': '0 0% 27%', '--card': '0 0% 100%', '--card-foreground': '0 0% 27%', '--popover': '0 0% 100%', '--popover-foreground': '0 0% 27%', '--primary': '206 90% 61%', '--primary-foreground': '0 0% 100%', '--secondary': '0 0% 75%', '--secondary-foreground': '0 0% 27%', '--muted': '0 0% 75%', '--muted-foreground': '0 0% 40%', '--accent': '350 100% 88%', '--accent-foreground': '0 0% 27%', '--destructive': '0 100% 64%', '--destructive-foreground': '0 0% 100%', '--border': '0 0% 75%', '--input': '0 0% 75%', '--ring': '206 90% 61%', },
      dark: { '--background': '0 0% 17%', '--foreground': '0 0% 89%', '--card': '0 0% 20%', '--card-foreground': '0 0% 89%', '--popover': '0 0% 20%', '--popover-foreground': '0 0% 89%', '--primary': '206 90% 61%', '--primary-foreground': '0 0% 10%', '--secondary': '0 0% 35%', '--secondary-foreground': '0 0% 89%', '--muted': '0 0% 35%', '--muted-foreground': '0 0% 60%', '--accent': '350 100% 78%', '--accent-foreground': '0 0% 10%', '--destructive': '0 100% 64%', '--destructive-foreground': '0 0% 89%', '--border': '0 0% 35%', '--input': '0 0% 35%', '--ring': '206 90% 61%', },
    },
    {
      name: 'SET_1_PALETTE_6',
      category: 'customThemes',
      light: { '--background': '0 0% 96%', '--foreground': '0 0% 4%', '--card': '0 0% 88%', '--card-foreground': '0 0% 4%', '--popover': '0 0% 88%', '--popover-foreground': '0 0% 4%', '--primary': '330 100% 50%', '--primary-foreground': '0 0% 96%', '--secondary': '0 0% 50%', '--secondary-foreground': '0 0% 96%', '--muted': '0 0% 50%', '--muted-foreground': '0 0% 40%', '--accent': '180 100% 50%', '--accent-foreground': '0 0% 4%', '--destructive': '0 100% 60%', '--destructive-foreground': '0 0% 96%', '--border': '0 0% 50%', '--input': '0 0% 50%', '--ring': '330 100% 50%', },
      dark: { '--background': '0 0% 4%', '--foreground': '0 0% 96%', '--card': '0 0% 12%', '--card-foreground': '0 0% 96%', '--popover': '0 0% 12%', '--popover-foreground': '0 0% 96%', '--primary': '330 100% 50%', '--primary-foreground': '0 0% 96%', '--secondary': '0 0% 50%', '--secondary-foreground': '0 0% 96%', '--muted': '0 0% 50%', '--muted-foreground': '0 0% 60%', '--accent': '180 100% 50%', '--accent-foreground': '0 0% 4%', '--destructive': '0 100% 60%', '--destructive-foreground': '0 0% 96%', '--border': '0 0% 50%', '--input': '0 0% 50%', '--ring': '330 100% 50%', },
    },
    {
      name: 'SET_1_PALETTE_7',
      category: 'customThemes',
      light: { '--background': '220 33% 95%', '--foreground': '0 0% 13%', '--card': '0 0% 100%', '--card-foreground': '0 0% 13%', '--popover': '0 0% 100%', '--popover-foreground': '0 0% 13%', '--primary': '210 79% 45%', '--primary-foreground': '0 0% 100%', '--secondary': '0 0% 62%', '--secondary-foreground': '0 0% 13%', '--muted': '0 0% 62%', '--muted-foreground': '0 0% 40%', '--accent': '45 100% 51%', '--accent-foreground': '0 0% 13%', '--destructive': '0 63% 50%', '--destructive-foreground': '0 0% 100%', '--border': '0 0% 62%', '--input': '0 0% 62%', '--ring': '210 79% 45%', },
      dark: { '--background': '0 0% 13%', '--foreground': '220 33% 95%', '--card': '0 0% 16%', '--card-foreground': '220 33% 95%', '--popover': '0 0% 16%', '--popover-foreground': '220 33% 95%', '--primary': '210 79% 55%', '--primary-foreground': '0 0% 13%', '--secondary': '0 0% 38%', '--secondary-foreground': '220 33% 95%', '--muted': '0 0% 38%', '--muted-foreground': '0 0% 70%', '--accent': '45 100% 51%', '--accent-foreground': '0 0% 13%', '--destructive': '0 63% 50%', '--destructive-foreground': '220 33% 95%', '--border': '0 0% 38%', '--input': '0 0% 38%', '--ring': '210 79% 55%', },
    },
    {
      name: 'SET_1_PALETTE_8',
      category: 'customThemes',
      light: { '--background': '220 100% 96%', '--foreground': '240 14% 15%', '--card': '220 50% 99%', '--card-foreground': '240 14% 15%', '--popover': '220 50% 99%', '--popover-foreground': '240 14% 15%', '--primary': '271 76% 53%', '--primary-foreground': '220 100% 96%', '--secondary': '240 4% 68%', '--secondary-foreground': '240 14% 15%', '--muted': '240 4% 68%', '--muted-foreground': '240 4% 48%', '--accent': '180 100% 50%', '--accent-foreground': '240 14% 15%', '--destructive': '11 100% 62%', '--destructive-foreground': '220 100% 96%', '--border': '240 4% 68%', '--input': '240 4% 68%', '--ring': '271 76% 53%', },
      dark: { '--background': '240 14% 15%', '--foreground': '220 100% 96%', '--card': '240 11% 20%', '--card-foreground': '220 100% 96%', '--popover': '240 11% 20%', '--popover-foreground': '220 100% 96%', '--primary': '271 76% 53%', '--primary-foreground': '220 100% 96%', '--secondary': '240 4% 68%', '--secondary-foreground': '220 100% 96%', '--muted': '240 4% 68%', '--muted-foreground': '240 4% 48%', '--accent': '180 100% 50%', '--accent-foreground': '240 14% 15%', '--destructive': '11 100% 62%', '--destructive-foreground': '220 100% 96%', '--border': '240 4% 68%', '--input': '240 4% 68%', '--ring': '271 76% 53%', },
    },
    {
      name: 'SET_1_PALETTE_9',
      category: 'customThemes',
      light: { '--background': '120 100% 98%', '--foreground': '210 10% 23%', '--card': '0 0% 100%', '--card-foreground': '210 10% 23%', '--popover': '0 0% 100%', '--popover-foreground': '210 10% 23%', '--primary': '134 61% 40%', '--primary-foreground': '0 0% 100%', '--secondary': '208 7% 48%', '--secondary-foreground': '0 0% 100%', '--muted': '208 7% 48%', '--muted-foreground': '208 7% 30%', '--accent': '211 100% 50%', '--accent-foreground': '0 0% 100%', '--destructive': '354 70% 54%', '--destructive-foreground': '0 0% 100%', '--border': '208 7% 48%', '--input': '208 7% 48%', '--ring': '134 61% 40%', },
      dark: { '--background': '210 10% 15%', '--foreground': '120 100% 98%', '--card': '210 10% 20%', '--card-foreground': '120 100% 98%', '--popover': '210 10% 20%', '--popover-foreground': '120 100% 98%', '--primary': '134 61% 50%', '--primary-foreground': '0 0% 100%', '--secondary': '208 7% 35%', '--secondary-foreground': '0 0% 100%', '--muted': '208 7% 35%', '--muted-foreground': '208 7% 60%', '--accent': '211 100% 60%', '--accent-foreground': '0 0% 100%', '--destructive': '354 70% 64%', '--destructive-foreground': '0 0% 100%', '--border': '208 7% 35%', '--input': '208 7% 35%', '--ring': '134 61% 50%', },
    },
];

export const appThemes: Record<ThemeCategory, ThemeDefinition[]> = {
    bespokeThemes,
    primaryColorsThemes,
    daisyUIThemes,
    greyscaleThemes,
    customThemes,
};

2. src/components/theme-provider.tsx This component manages the theme state and applies it to the application.

"use client"

import * as React from "react"
import { appThemes, type ThemeDefinition, type ThemeMode, type ThemeCategory, defaultTheme } from '@/lib/themes'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultMode?: ThemeMode
  defaultThemeName?: string
  defaultCategory?: ThemeCategory
  storageKey?: string
}

type ThemeProviderState = {
  mode: ThemeMode
  colorTheme: string
  category: ThemeCategory
  currentThemeDef: ThemeDefinition | null | undefined
  setColorTheme: (category: ThemeCategory, name:string) => void
  setMode: (mode: ThemeMode) => void
  toggleMode: () => void
}

const initialState: ThemeProviderState = {
  mode: defaultTheme.mode,
  colorTheme: defaultTheme.name,
  category: defaultTheme.category,
  currentThemeDef: null,
  setColorTheme: () => null,
  setMode: () => null,
  toggleMode: () => null,
}

const ThemeProviderContext = React.createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultMode = defaultTheme.mode,
  defaultThemeName = defaultTheme.name,
  defaultCategory = defaultTheme.category,
  storageKey = 'app-ui-theme',
  ...props
}: ThemeProviderProps) {
  const [mode, setMode] = React.useState<ThemeMode>(defaultMode)
  const [colorTheme, setColorThemeState] = React.useState<string>(defaultThemeName)
  const [category, setCategory] = React.useState<ThemeCategory>(defaultCategory)
  const [initializing, setInitializing] = React.useState(true);

  React.useEffect(() => {
    let storedTheme: { mode: ThemeMode; colorTheme: string; category: ThemeCategory } | null = null;
    try {
      const stored = localStorage.getItem(storageKey)
      if (stored) {
        storedTheme = JSON.parse(stored);
      }
    } catch (error) {
      console.warn('Failed to load theme from localStorage:', error);
    }

    if (storedTheme) {
      setMode(storedTheme.mode);
      setColorThemeState(storedTheme.colorTheme);
      setCategory(storedTheme.category);
    }
    setInitializing(false);
  }, [storageKey]);

  const setColorTheme = React.useCallback((newCategory: ThemeCategory, newThemeName: string) => {
    setCategory(newCategory);
    setColorThemeState(newThemeName);
    try {
      localStorage.setItem(storageKey, JSON.stringify({ mode, colorTheme: newThemeName, category: newCategory }))
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error)
    }
  }, [mode, storageKey]);


  React.useEffect(() => {
    if (initializing) return;

    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(mode);

    const themeToClassName = (themeName: string) => themeName.toLowerCase().replace(/[\s_&]+/g, '-');

    // Remove all color theme classes
    const allThemeClassNames = Object.values(appThemes).flat().map(t => themeToClassName(t.name));
    root.classList.remove(...allThemeClassNames);
    
    // Add current color theme class
    root.classList.add(themeToClassName(colorTheme));

    try {
      localStorage.setItem(storageKey, JSON.stringify({ mode, colorTheme, category }))
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error)
    }
  }, [mode, colorTheme, category, initializing]);

  const currentThemeDef = React.useMemo(() => {
    const themesForCategory = appThemes[category];
    if (themesForCategory) {
      return themesForCategory.find(t => t.name === colorTheme) || null;
    }
    return Object.values(appThemes).flat().find(t => t.name === colorTheme) || null;
  }, [colorTheme, category]);


  const toggleMode = React.useCallback(() => {
    setMode(prevMode => {
        const newMode = prevMode === 'light' ? 'dark' : 'light';
        try {
            localStorage.setItem(storageKey, JSON.stringify({ mode: newMode, colorTheme, category }));
        } catch (error) {
            console.warn('Failed to save theme to localStorage:', error);
        }
        return newMode;
    });
  }, [colorTheme, category, storageKey])

  const value = {
    mode,
    setMode: setMode as (mode: ThemeMode) => void,
    colorTheme,
    setColorTheme,
    toggleMode,
    currentThemeDef,
    category,
  }

  if (initializing) {
    return null;
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}

3. src/components/theme-switcher.tsx This is the UI component that allows users to select a theme.

'use client'

import * as React from 'react'
import { Check, Palette, Sun, Moon } from 'lucide-react'
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
import { Switch } from './ui/switch'

const categoryLabels: Record<ThemeCategory, string> = {
  bespokeThemes: 'Bespoke',
  primaryColorsThemes: 'Primary Colors',
  daisyUIThemes: 'DaisyUI Themes',
  greyscaleThemes: 'Greyscale',
  customThemes: 'Custom',
}

const descriptiveThemeNames: Record<string, string> = {
  'Ruby & Sky': 'Ruby & Sky',
  'Coolish Slate': 'Coolish Slate',
  'Fuchsia & Cyan': 'Fuchsia & Cyan',
  'Indigo & Amber': 'Indigo & Amber',
  'Indigo Night': 'Indigo Night',
  'Emerald Isle': 'Emerald Isle',
  SET_1_PALETTE_0: 'Ocean Breeze',
  SET_1_PALETTE_1: 'Cosmic Indigo',
  SET_1_PALETTE_2: 'Coral Grove',
  SET_1_PALETTE_3: 'Red Sky',
  SET_1_PALETTE_4: 'Cool Slate',
  SET_1_PALETTE_5: 'Pastel Sky',
  SET_1_PALETTE_6: 'Neon Fusion',
  SET_1_PALETTE_7: 'Material Blue',
  SET_1_PALETTE_8: 'Vaporwave Violet',
  SET_1_PALETTE_9: 'Growth Green',
};

function getDescriptiveThemeName(themeName: string): string {
    return descriptiveThemeNames[themeName] || themeName;
}

function ThemeColorSwatch({ theme, size = 'sm' }: { theme: ThemeDefinition; size?: 'sm' | 'md' }) {
    const { mode } = useTheme();
    const sizeClasses = size === 'md' ? 'w-4 h-4' : 'w-3 h-3'

    const primaryColor = theme[mode]['--primary'];
    const accentColor = theme.light['--accent']; // Use a fixed accent for swatch consistency
    
    return (
        <div className="relative flex items-center justify-center" style={{ width: size === 'md' ? '20px' : '16px', height: size === 'md' ? '20px' : '16px' }}>
            <div 
                className={`${sizeClasses} rounded-full border border-border/50`} 
                style={{ backgroundColor: `hsl(${primaryColor})`, position: 'absolute', top: 0, left: 0 }} 
            />
            <div 
                className={`${sizeClasses} rounded-full border border-border/50`} 
                style={{ backgroundColor: `hsl(${accentColor})`, position: 'absolute', bottom: 0, right: 0 }} 
            />
        </div>
    )
}

function ModeToggle() {
  const { mode, toggleMode } = useTheme()

  return (
    <div className="flex items-center justify-between px-2 py-1.5">
        <div className="flex items-center gap-2">
         {mode === 'light' ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
        <span className="text-sm font-medium">{mode === 'light' ? 'Light' : 'Dark'} Mode</span>
        </div>
      <Switch checked={mode === 'dark'} onCheckedChange={toggleMode} aria-label="Toggle dark mode" />
    </div>
  )
}

function ThemeMenuItem({ theme, category, isActive }: { 
  theme: ThemeDefinition; 
  category: ThemeCategory;
  isActive: boolean;
}) {
  const { setColorTheme } = useTheme()

  return (
    <DropdownMenuItem
      onClick={() => setColorTheme(category, theme.name)}
      className="flex items-center justify-between gap-2 cursor-pointer"
    >
      <div className="flex items-center gap-2">
        {theme.symbol && (
          <span className="text-sm font-medium" style={{ color: `hsl(${theme.swatchColor})` }}>
            {theme.symbol}
          </span>
        )}
        <span>{getDescriptiveThemeName(theme.name)}</span>
      </div>
      <div className="flex items-center gap-2">
        <ThemeColorSwatch theme={theme} />
        {isActive && <Check className="h-4 w-4" />}
      </div>
    </DropdownMenuItem>
  )
}

export function ThemeSwitcher() {
  const { colorTheme, category: activeCategory } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Palette className="h-5 w-5" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60" align="end">
        <ModeToggle />
        <DropdownMenuSeparator />
        
        {(Object.keys(appThemes) as ThemeCategory[]).map((cat) => (
          appThemes[cat].length > 0 &&
          <DropdownMenuSub key={cat}>
            <DropdownMenuSubTrigger>
              <Palette className="mr-2 h-4 w-4" />
              <span>{categoryLabels[cat]}</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="w-48 max-h-96 overflow-y-auto">
              {appThemes[cat].map((theme) => (
                <ThemeMenuItem
                  key={theme.name}
                  theme={theme}
                  category={cat}
                  isActive={colorTheme === theme.name && activeCategory === cat}
                />
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

4. src/app/globals.css Update this file with the CSS variables for all the themes.

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 210 17% 98%;
    --foreground: 215 28% 17%;
    --card: 0 0% 100%;
    --card-foreground: 215 28% 17%;
    --popover: 0 0% 100%;
    --popover-foreground: 215 28% 17%;
    --primary: 207 68% 54%;
    --primary-foreground: 0 0% 100%;
    --secondary: 215 14% 55%;
    --secondary-foreground: 215 28% 17%;
    --muted: 215 14% 55%;
    --muted-foreground: 215 14% 45%;
    --accent: 145 63% 49%;
    --accent-foreground: 0 0% 100%;
    --destructive: 5 81% 57%;
    --destructive-foreground: 0 0% 100%;
    --border: 215 14% 55%;
    --input: 215 14% 55%;
    --ring: 207 68% 54%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 215 28% 17%;
    --foreground: 210 17% 98%;
    --card: 215 28% 17%;
    --card-foreground: 210 17% 98%;
    --popover: 215 28% 17%;
    --popover-foreground: 210 17% 98%;
    --primary: 207 68% 54%;
    --primary-foreground: 0 0% 100%;
    --secondary: 215 14% 35%;
    --secondary-foreground: 210 17% 98%;
    --muted: 215 14% 35%;
    --muted-foreground: 215 14% 65%;
    --accent: 145 63% 49%;
    --accent-foreground: 0 0% 100%;
    --destructive: 5 81% 57%;
    --destructive-foreground: 0 0% 100%;
    --border: 215 14% 35%;
    --input: 215 14% 35%;
    --ring: 207 68% 54%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }

body {
  font-family: var(--font-body), sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-headline), sans-serif;
}

* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Light Themes */
:root.red { --primary: 0 72% 51%; --accent: 0 86% 97%; }
:root.orange { --primary: 25 95% 53%; --accent: 25 86% 97%; }
:root.amber { --primary: 45 93% 47%; --accent: 45 86% 97%; }
:root.yellow { --primary: 54 96% 50%; --accent: 54 86% 97%; }
:root.lime { --primary: 84 79% 44%; --accent: 84 86% 97%; }
:root.green { --primary: 142 76% 36%; --accent: 142 86% 97%; }
:root.emerald { --primary: 158 79% 41%; --accent: 158 86% 97%; }
:root.teal { --primary: 173 80% 40%; --accent: 173 86% 97%; }
:root.cyan { --primary: 190 95% 48%; --accent: 190 86% 97%; }
:root.sky { --primary: 199 98% 52%; --accent: 199 86% 97%; }
:root.blue { --primary: 217 91% 60%; --accent: 217 86% 97%; }
:root.indigo { --primary: 239 84% 67%; --accent: 239 86% 97%; }
:root.violet { --primary: 259 93% 68%; --accent: 259 86% 97%; }
:root.purple { --primary: 271 91% 65%; --accent: 271 86% 97%; }
:root.fuchsia { --primary: 291 89% 65%; --accent: 291 86% 97%; }
:root.pink { --primary: 322 95% 61%; --accent: 322 86% 97%; }
:root.rose { --primary: 341 96% 61%; --accent: 341 86% 97%; }
:root.cupcake { --primary: 335 60% 50%; --accent: 335 60% 95%; }
:root.bumblebee { --primary: 43 96% 56%; --accent: 43 96% 95%; }
:root.corporate { --primary: 215 25% 27%; --accent: 215 25% 95%; }
:root.synthwave { --primary: 252 82% 62%; --accent: 303 82% 62%; }
:root.retro { --primary: 45 89% 62%; --accent: 35 89% 95%; }
:root.valentine { --primary: 313 77% 65%; --accent: 313 77% 95%; }
:root.halloween { --primary: 23 98% 51%; --accent: 23 98% 95%; }
:root.garden { --primary: 158 64% 52%; --accent: 158 64% 95%; }
:root.aqua { --primary: 192 92% 45%; --accent: 192 92% 95%; }
:root.lofi { --primary: 215 28% 17%; --accent: 215 28% 95%; }
:root.pastel { --primary: 259 93% 68%; --accent: 259 93% 95%; }
:root.fantasy { --primary: 272 49% 49%; --accent: 272 49% 95%; }
:root.wireframe { --primary: 0 0% 45%; --accent: 0 0% 95%; }
:root.black { --primary: 215 28% 17%; --accent: 215 28% 95%; }
:root.luxury { --primary: 43 96% 56%; --accent: 43 96% 95%; }
:root.dracula { --primary: 259 93% 68%; --accent: 259 93% 95%; }
:root.cmyk { --primary: 180 100% 50%; --accent: 180 100% 95%; }
:root.autumn { --primary: 23 98% 51%; --accent: 23 98% 95%; }
:root.business { --primary: 215 25% 27%; --accent: 215 25% 95%; }
:root.acid { --primary: 101 100% 36%; --accent: 101 100% 95%; }
:root.lemonade { --primary: 199 89% 48%; --accent: 199 89% 95%; }
:root.night { --primary: 215 28% 17%; --accent: 215 28% 95%; }
:root.coffee { --primary: 43 96% 56%; --accent: 43 96% 95%; }
:root.winter { --primary: 217 91% 60%; --accent: 217 91% 95%; }
:root.charcoal { --primary: 0 0% 25%; --accent: 0 0% 85%; }
:root.slate { --primary: 210 10% 40%; --accent: 210 10% 80%; }
:root.stone { --primary: 30 5% 50%; --accent: 30 5% 90%; }
:root.zinc { --primary: 240 5% 60%; --accent: 240 5% 95%; }
:root.neutral { --primary: 0 0% 50%; --accent: 0 0% 90%; }
:root.gray { --primary: 0 0% 50%; --accent: 0 0% 90%; }
:root.ruby-sky { --background: 180 50% 99%; --foreground: 0 0% 27%; --card: 0 0% 100%; --card-foreground: 0 0% 27%; --popover: 0 0% 100%; --popover-foreground: 0 0% 27%; --primary: 197 71% 73%; --primary-foreground: 0 0% 27%; --secondary: 0 0% 75%; --secondary-foreground: 0 0% 27%; --muted: 0 0% 75%; --muted-foreground: 0 0% 40%; --accent: 350 100% 88%; --accent-foreground: 0 0% 27%; --destructive: 9 100% 64%; --destructive-foreground: 0 0% 100%; --border: 0 0% 75%; --input: 0 0% 75%; --ring: 197 71% 73%; }
:root.coolish-slate { --background: 212 22% 95%; --foreground: 212 25% 22%; --card: 0 0% 100%; --card-foreground: 212 25% 22%; --popover: 0 0% 100%; --popover-foreground: 212 25% 22%; --primary: 248 80% 66%; --primary-foreground: 0 0% 100%; --secondary: 211 15% 69%; --secondary-foreground: 212 25% 22%; --muted: 211 15% 69%; --muted-foreground: 211 15% 49%; --accent: 181 100% 41%; --accent-foreground: 0 0% 100%; --destructive': '0 84% 60%; --destructive-foreground': '0 0% 100%; --border': '211 15% 69%; --input': '211 15% 69%; --ring': '248 80% 66%; }
:root.fuchsia-cyan { --background': '0 0% 96%; --foreground': '0 0% 4%; --card': '0 0% 88%; --card-foreground': '0 0% 4%; --popover': '0 0% 88%; --popover-foreground': '0 0% 4%; --primary': '330 100% 50%; --primary-foreground': '0 0% 96%; --secondary': '0 0% 50%; --secondary-foreground': '0 0% 96%; --muted': '0 0% 50%; --muted-foreground': '0 0% 40%; --accent': '180 100% 50%; --accent-foreground': '0 0% 4%; --destructive': '0 100% 60%; --destructive-foreground': '0 0% 96%; --border': '0 0% 50%; --input': '0 0% 50%; --ring': '330 100% 50%; }
:root.indigo-amber { --background': '231 48% 94%; --foreground': '0 0% 13%; --card': '0 0% 100%; --card-foreground': '0 0% 13%; --popover': '0 0% 100%; --popover-foreground': '0 0% 13%; --primary': '211 78% 46%; --primary-foreground': '0 0% 100%; --secondary': '0 0% 62%; --secondary-foreground': '0 0% 13%; --muted': '0 0% 62%; --muted-foreground': '0 0% 40%; --accent': '45 100% 51%; --accent-foreground': '0 0% 13%; --destructive': '0 65% 51%; --destructive-foreground': '0 0% 100%; --border': '0 0% 62%; --input': '0 0% 62%; --ring': '211 78% 46%; }
:root.indigo-night { --background': '220 100% 96%; --foreground': '240 14% 15%; --card': '220 50% 99%; --card-foreground': '240 14% 15%; --popover': '220 50% 99%; --popover-foreground': '240 14% 15%; --primary': '271 76% 53%; --primary-foreground': '220 100% 96%; --secondary': '263 47% 51%; --secondary-foreground': '220 100% 96%; --muted': '263 47% 51%; --muted-foreground': '240 4% 68%; --accent': '180 100% 50%; --accent-foreground': '220 100% 96%; --destructive': '11 100% 62%; --destructive-foreground': '220 100% 96%; --border': '263 47% 51%; --input': '263 47% 51%; --ring': '271 76% 53%; }
:root.emerald-isle { --background': '120 100% 98%; --foreground': '210 10% 23%; --card': '0 0% 100%; --card-foreground': '210 10% 23%; --popover': '0 0% 100%; --popover-foreground': '210 10% 23%; --primary': '134 61% 40%; --primary-foreground': '0 0% 100%; --secondary': '208 7% 48%; --secondary-foreground': '0 0% 100%; --muted': '208 7% 48%; --muted-foreground': '208 7% 30%; --accent': '211 100% 50%; --accent-foreground': '0 0% 100%; --destructive': '354 70% 54%; --destructive-foreground': '0 0% 100%; --border': '208 7% 48%; --input': '208 7% 48%; --ring': '134 61% 40%; }
.light.set-1-palette-0 { --background: 0 0% 97%; --foreground: 215 28% 17%; --card: 0 0% 100%; --card-foreground: 215 28% 17%; --popover: 0 0% 100%; --popover-foreground: 215 28% 17%; --primary: 207 83% 58%; --primary-foreground: 210 20% 98%; --secondary: 210 5% 53%; --secondary-foreground: 215 28% 17%; --muted: 210 5% 53%; --muted-foreground: 215 20% 65%; --accent: 142 67% 44%; --accent-foreground: 210 20% 98%; --destructive: 0 86% 56%; --destructive-foreground: 210 20% 98%; --border: 210 5% 53%; --input: 210 5% 53%; --ring: 207 83% 58%; }
.light.set-1-palette-1 { --background: 240 100% 94%; --foreground: 246 33% 14%; --card: 240 50% 98%; --card-foreground: 246 33% 14%; --popover: 240 50% 98%; --popover-foreground: 246 33% 14%; --primary: 246 76% 63%; --primary-foreground: 240 100% 94%; --secondary: 244 15% 80%; --secondary-foreground: 246 33% 14%; --muted: 244 15% 80%; --muted-foreground: 244 15% 60%; --accent: 185 100% 50%; --accent-foreground: 246 33% 14%; --destructive: 0 100% 71%; --destructive-foreground: 240 100% 94%; --border: 244 15% 80%; --input: 244 15% 80%; --ring: 246 76% 63%; }
.light.set-1-palette-2 { --background: 28 83% 95%; --foreground: 27 23% 24%; --card: 0 0% 100%; --card-foreground: 27 23% 24%; --popover: 0 0% 100%; --popover-foreground: 27 23% 24%; --primary: 16 100% 66%; --primary-foreground: 27 23% 24%; --secondary: 0 0% 64%; --secondary-foreground: 27 23% 24%; --muted: 0 0% 64%; --muted-foreground: 0 0% 40%; --accent: 120 39% 49%; --accent-foreground: 0 0% 100%; --destructive: 0 63% 50%; --destructive-foreground: 0 0% 100%; --border: 0 0% 64%; --input: 0 0% 64%; --ring: 16 100% 66%; }
.light.set-1-palette-3 { --background: 0 0% 99%; --foreground: 0 0% 13%; --card: 0 0% 100%; --card-foreground: 0 0% 13%; --popover: 0 0% 100%; --popover-foreground: 0 0% 13%; --primary: 0 100% 71%; --primary-foreground: 0 0% 100%; --secondary: 0 0% 69%; --secondary-foreground: 0 0% 13%; --muted: 0 0% 69%; --muted-foreground: 0 0% 40%; --accent: 207 89% 53%; --accent-foreground: 0 0% 100%; --destructive: 356 70% 54%; --destructive-foreground: 0 0% 100%; --border: 0 0% 69%; --input: 0 0% 69%; --ring: 0 100% 71%; }
.light.set-1-palette-4 { --background: 220 20% 96%; --foreground': '224 10% 16%; --card': '0 0% 100%; --card-foreground': '224 10% 16%; --popover': '0 0% 100%; --popover-foreground': '224 10% 16%; --primary': '248 80% 66%; --primary-foreground': '0 0% 100%; --secondary': '220 10% 60%; --secondary-foreground': '224 10% 16%; --muted': '220 10% 60%; --muted-foreground': '220 10% 40%; --accent': '185 100% 50%; --accent-foreground': '0 0% 100%; --destructive': '0 84% 60%; --destructive-foreground': '0 0% 100%; --border': '220 10% 60%; --input': '220 10% 60%; --ring': '248 80% 66%; }
.light.set-1-palette-5 { --background': '0 0% 99%; --foreground': '0 0% 27%; --card': '0 0% 100%; --card-foreground': '0 0% 27%; --popover': '0 0% 100%; --popover-foreground': '0 0% 27%; --primary': '206 90% 61%; --primary-foreground': '0 0% 100%; --secondary': '0 0% 75%; --secondary-foreground': '0 0% 27%; --muted': '0 0% 75%; --muted-foreground': '0 0% 40%; --accent': '350 100% 88%; --accent-foreground': '0 0% 27%; --destructive': '0 100% 64%; --destructive-foreground': '0 0% 100%; --border': '0 0% 75%; --input': '0 0% 75%; --ring': '206 90% 61%; }
.light.set-1-palette-6 { --background': '0 0% 96%; --foreground': '0 0% 4%; --card': '0 0% 88%; --card-foreground': '0 0% 4%; --popover': '0 0% 88%; --popover-foreground': '0 0% 4%; --primary': '330 100% 50%; --primary-foreground': '0 0% 96%; --secondary': '0 0% 50%; --secondary-foreground': '0 0% 96%; --muted': '0 0% 50%; --muted-foreground': '0 0% 40%; --accent': '180 100% 50%; --accent-foreground': '0 0% 4%; --destructive': '0 100% 60%; --destructive-foreground': '0 0% 96%; --border': '0 0% 50%; --input': '0 0% 50%; --ring': '330 100% 50%; }
.light.set-1-palette-7 { --background': '220 33% 95%; --foreground': '0 0% 13%; --card': '0 0% 100%; --card-foreground': '0 0% 13%; --popover': '0 0% 100%; --popover-foreground': '0 0% 13%; --primary': '210 79% 45%; --primary-foreground': '0 0% 100%; --secondary': '0 0% 62%; --secondary-foreground': '0 0% 13%; --muted': '0 0% 62%; --muted-foreground': '0 0% 40%; --accent': '45 100% 51%; --accent-foreground': '0 0% 13%; --destructive': '0 63% 50%; --destructive-foreground': '0 0% 100%; --border': '0 0% 62%; --input': '0 0% 62%; --ring': '210 79% 45%; }
.light.set-1-palette-8 { --background': '220 100% 96%; --foreground': '240 14% 15%; --card': '220 50% 99%; --card-foreground': '240 14% 15%; --popover': '220 50% 99%; --popover-foreground': '240 14% 15%; --primary': '271 76% 53%; --primary-foreground': '220 100% 96%; --secondary': '240 4% 68%; --secondary-foreground': '240 14% 15%; --muted': '240 4% 68%; --muted-foreground': '240 4% 48%; --accent': '180 100% 50%; --accent-foreground': '240 14% 15%; --destructive': '11 100% 62%; --destructive-foreground': '220 100% 96%; --border': '240 4% 68%; --input': '240 4% 68%; --ring': '271 76% 53%; }
.light.set-1-palette-9 { --background': '120 100% 98%; --foreground': '210 10% 23%; --card': '0 0% 100%; --card-foreground': '210 10% 23%; --popover': '0 0% 100%; --popover-foreground': '210 10% 23%; --primary': '134 61% 40%; --primary-foreground': '0 0% 100%; --secondary': '208 7% 48%; --secondary-foreground': '0 0% 100%; --muted': '208 7% 48%; --muted-foreground': '208 7% 30%; --accent': '211 100% 50%; --accent-foreground': '0 0% 100%; --destructive': '354 70% 54%; --destructive-foreground': '0 0% 100%; --border': '208 7% 48%; --input': '208 7% 48%; --ring': '134 61% 40%; }

/* Dark Themes */
.dark.red { --primary': '0 72% 51%; --accent': '0 86% 15%; }
.dark.orange { --primary': '25 95% 53%; --accent': '25 86% 15%; }
.dark.amber { --primary': '45 93% 47%; --accent': '45 86% 15%; }
.dark.yellow { --primary': '54 96% 50%; --accent': '54 86% 15%; }
.dark.lime { --primary': '84 79% 44%; --accent': '84 86% 15%; }
.dark.green { --primary': '142 76% 36%; --accent': '142 86% 15%; }
.dark.emerald { --primary': '158 79% 41%; --accent': '158 86% 15%; }
.dark.teal { --primary': '173 80% 40%; --accent': '173 86% 15%; }
.dark.cyan { --primary': '190 95% 48%; --accent': '190 86% 15%; }
.dark.sky { --primary': '199 98% 52%; --accent': '199 86% 15%; }
.dark.blue { --primary': '217 91% 60%; --accent': '217 86% 15%; }
.dark.indigo { --primary': '239 84% 67%; --accent': '239 86% 15%; }
.dark.violet { --primary': '259 93% 68%; --accent': '259 86% 15%; }
.dark.purple { --primary': '271 91% 65%; --accent': '271 86% 15%; }
.dark.fuchsia { --primary': '291 89% 65%; --accent': '291 86% 15%; }
.dark.pink { --primary': '322 95% 61%; --accent': '322 86% 15%; }
.dark.rose { --primary': '341 96% 61%; --accent': '341 86% 15%; }
.dark.cupcake { --primary': '335 60% 50%; --accent': '335 60% 15%; }
.dark.bumblebee { --primary': '43 96% 56%; --accent': '43 96% 15%; }
.dark.corporate { --primary': '215 25% 27%; --accent': '215 25% 15%; }
.dark.synthwave { --primary': '252 82% 62%; --accent': '303 82% 20%; }
.dark.retro { --primary': '45 89% 62%; --accent': '35 89% 15%; }
.dark.valentine { --primary': '313 77% 65%; --accent': '313 77% 15%; }
.dark.halloween { --primary': '23 98% 51%; --accent': '23 98% 15%; }
.dark.garden { --primary': '158 64% 52%; --accent': '158 64% 15%; }
.dark.aqua { --primary': '192 92% 45%; --accent': '192 92% 15%; }
.dark.lofi { --primary': '215 28% 70%; --accent': '215 28% 15%; }
.dark.pastel { --primary': '259 93% 68%; --accent': '259 93% 15%; }
.dark.fantasy { --primary': '272 49% 49%; --accent': '272 49% 15%; }
.dark.wireframe { --primary': '0 0% 70%; --accent': '0 0% 15%; }
.dark.black { --primary': '215 28% 70%; --accent': '215 28% 15%; }
.dark.luxury { --primary': '43 96% 56%; --accent': '43 96% 15%; }
.dark.dracula { --primary': '259 93% 68%; --accent': '259 93% 15%; }
.dark.cmyk { --primary': '180 100% 50%; --accent': '180 100% 15%; }
.dark.autumn { --primary': '23 98% 51%; --accent': '23 98% 15%; }
.dark.business { --primary': '215 25% 70%; --accent': '215 25% 15%; }
.dark.acid { --primary': '101 100% 36%; --accent': '101 100% 15%; }
.dark.lemonade { --primary': '199 89% 48%; --accent': '199 89% 15%; }
.dark.night { --primary': '215 28% 70%; --accent': '215 28% 15%; }
.dark.coffee { --primary': '43 96% 56%; --accent': '43 96% 15%; }
.dark.winter { --primary': '217 91% 60%; --accent': '217 91% 15%; }
.dark.charcoal { --primary': '0 0% 70%; --accent': '0 0% 20%; }
.dark.slate { --primary': '210 10% 60%; --accent': '210 10% 20%; }
.dark.stone { --primary': '30 5% 65%; --accent': '30 5% 20%; }
.dark.zinc { --primary': '240 5% 70%; --accent': '240 5% 20%; }
.dark.neutral { --primary': '0 0% 80%; --accent': '0 0% 20%; }
.dark.gray { --primary': '0 0% 80%; --accent': '0 0% 20%; }
.dark.ruby-sky { --background': '0 0% 10%; --foreground': '0 0% 90%; --card': '0 0% 12%; --card-foreground': '0 0% 90%; --popover': '0 0% 12%; --popover-foreground': '0 0% 90%; --primary': '197 71% 73%; --primary-foreground': '0 0% 10%; --secondary': '0 0% 30%; --secondary-foreground': '0 0% 90%; --muted': '0 0% 30%; --muted-foreground': '0 0% 60%; --accent': '350 100% 88%; --accent-foreground': '0 0% 10%; --destructive': '9 100% 64%; --destructive-foreground': '0 0% 100%; --border': '0 0% 30%; --input': '0 0% 30%; --ring': '197 71% 73%; }
.dark.coolish-slate { --background': '212 22% 15%; --foreground': '212 22% 85%; --card': '212 22% 20%; --card-foreground': '212 22% 85%; --popover': '212 22% 20%; --popover-foreground': '212 22% 85%; --primary': '248 80% 76%; --primary-foreground': '212 22% 15%; --secondary': '211 15% 50%; --secondary-foreground': '212 22% 85%; --muted': '211 15% 50%; --muted-foreground': '211 15% 70%; --accent': '181 100% 51%; --accent-foreground': '212 22% 15%; --destructive': '0 84% 70%; --destructive-foreground': '0 0% 100%; --border': '211 15% 50%; --input': '211 15% 50%; --ring': '248 80% 76%; }
.dark.fuchsia-cyan { --background': '0 0% 4%; --foreground': '0 0% 96%; --card': '0 0% 12%; --card-foreground': '0 0% 96%; --popover': '0 0% 12%; --popover-foreground': '0 0% 96%; --primary': '330 100% 50%; --primary-foreground': '0 0% 96%; --secondary': '0 0% 50%; --secondary-foreground': '0 0% 96%; --muted': '0 0% 50%; --muted-foreground': '0 0% 60%; --accent': '180 100% 50%; --accent-foreground': '0 0% 4%; --destructive': '0 100% 60%; --destructive-foreground': '0 0% 96%; --border': '0 0% 50%; --input': '0 0% 50%; --ring': '330 100% 50%; }
.dark.indigo-amber { --background': '0 0% 13%; --foreground': '231 48% 94%; --card': '0 0% 10%; --card-foreground': '231 48% 94%; --popover': '0 0% 10%; --popover-foreground': '231 48% 94%; --primary': '211 78% 66%; --primary-foreground': '0 0% 13%; --secondary': '0 0% 30%; --secondary-foreground': '231 48% 94%; --muted': '0 0% 30%; --muted-foreground': '0 0% 70%; --accent': '45 100% 51%; --accent-foreground': '0 0% 13%; --destructive': '0 65% 61%; --destructive-foreground': '0 0% 13%; --border': '0 0% 30%; --input': '0 0% 30%; --ring': '211 78% 66%; }
.dark.indigo-night { --background': '240 14% 15%; --foreground': '220 100% 96%; --card': '240 11% 20%; --card-foreground': '220 100% 96%; --popover': '240 11% 20%; --popover-foreground': '220 100% 96%; --primary': '271 76% 53%; --primary-foreground': '220 100% 96%; --secondary': '263 47% 51%; --secondary-foreground': '220 100% 96%; --muted': '263 47% 51%; --muted-foreground': '240 4% 68%; --accent': '180 100% 50%; --accent-foreground': '220 100% 96%; --destructive': '11 100% 62%; --destructive-foreground': '220 100% 96%; --border': '263 47% 51%; --input': '263 47% 51%; --ring': '271 76% 53%; }
.dark.emerald-isle { --background': '210 10% 15%; --foreground': '120 100% 98%; --card': '210 10% 20%; --card-foreground': '120 100% 98%; --popover': '210 10% 20%; --popover-foreground': '120 100% 98%; --primary': '134 61% 50%; --primary-foreground': '0 0% 100%; --secondary': '208 7% 35%; --secondary-foreground': '0 0% 100%; --muted': '208 7% 35%; --muted-foreground': '208 7% 60%; --accent': '211 100% 60%; --accent-foreground': '0 0% 100%; --destructive': '354 70% 64%; --destructive-foreground': '0 0% 100%; --border': '208 7% 35%; --input': '208 7% 35%; --ring': '134 61% 50%; }
.dark.set-1-palette-0 { --background': '215 28% 17%; --foreground': '0 0% 97%; --card': '215 28% 12%; --card-foreground': '0 0% 97%; --popover': '215 28% 12%; --popover-foreground': '0 0% 97%; --primary': '207 83% 58%; --primary-foreground': '210 20% 98%; --secondary': '210 5% 33%; --secondary-foreground': '0 0% 97%; --muted': '210 5% 33%; --muted-foreground': '215 20% 75%; --accent': '142 67% 44%; --accent-foreground': '210 20% 98%; --destructive': '0 86% 56%; --destructive-foreground': '210 20% 98%; --border': '210 5% 33%; --input': '210 5% 33%; --ring': '207 83% 58%; }
.dark.set-1-palette-1 { --background': '246 33% 14%; --foreground': '240 100% 94%; --card': '248 23% 21%; --card-foreground': '240 100% 94%; --popover': '248 23% 21%; --popover-foreground': '240 100% 94%; --primary': '246 76% 63%; --primary-foreground': '240 100% 94%; --secondary': '244 15% 60%; --secondary-foreground': '240 100% 94%; --muted': '244 15% 60%; --muted-foreground': '244 15% 40%; --accent': '185 100% 50%; --accent-foreground': '246 33% 14%; --destructive': '0 100% 71%; --destructive-foreground': '246 33% 14%; --border': '244 15% 60%; --input': '244 15% 60%; --ring': '246 76% 63%; }
.dark.set-1-palette-2 { --background': '27 23% 14%; --foreground': '28 83% 95%; --card': '27 23% 18%; --card-foreground': '28 83% 95%; --popover': '27 23% 18%; --popover-foreground': '28 83% 95%; --primary': '16 100% 66%; --primary-foreground': '27 23% 14%; --secondary': '0 0% 50%; --secondary-foreground': '28 83% 95%; --muted': '0 0% 50%; --muted-foreground': '0 0% 70%; --accent': '120 39% 49%; --accent-foreground': '0 0% 100%; --destructive': '0 63% 50%; --destructive-foreground': '28 83% 95%; --border': '0 0% 50%; --input': '0 0% 50%; --ring': '16 100% 66%; }
.dark.set-1-palette-3 { --background': '0 0% 13%; --foreground': '0 0% 99%; --card': '0 0% 16%; --card-foreground': '0 0% 99%; --popover': '0 0% 16%; --popover-foreground': '0 0% 99%; --primary': '0 100% 71%; --primary-foreground': '0 0% 13%; --secondary': '0 0% 31%; --secondary-foreground': '0 0% 99%; --muted': '0 0% 31%; --muted-foreground': '0 0% 60%; --accent': '207 89% 53%; --accent-foreground': '0 0% 100%; --destructive': '356 70% 54%; --destructive-foreground': '0 0% 99%; --border': '0 0% 31%; --input': '0 0% 31%; --ring': '0 100% 71%; }
.dark.set-1-palette-4 { --background': '224 10% 16%; --foreground': '220 20% 96%; --card': '224 10% 20%; --card-foreground': '220 20% 96%; --popover': '224 10% 20%; --popover-foreground': '220 20% 96%; --primary': '248 80% 66%; --primary-foreground': '224 10% 16%; --secondary': '220 10% 40%; --secondary-foreground': '220 20% 96%; --muted': '220 10% 40%; --muted-foreground': '220 10% 60%; --accent': '185 100% 50%; --accent-foreground': '224 10% 16%; --destructive': '0 84% 60%; --destructive-foreground': '220 20% 96%; --border': '220 10% 40%; --input': '220 10% 40%; --ring': '248 80% 66%; }
.dark.set-1-palette-5 { --background': '0 0% 17%; --foreground': '0 0% 89%; --card': '0 0% 20%; --card-foreground': '0 0% 89%; --popover': '0 0% 20%; --popover-foreground': '0 0% 89%; --primary': '206 90% 61%; --primary-foreground': '0 0% 10%; --secondary': '0 0% 35%; --secondary-foreground': '0 0% 89%; --muted': '0 0% 35%; --muted-foreground': '0 0% 60%; --accent': '350 100% 78%; --accent-foreground': '0 0% 10%; --destructive': '0 100% 64%; --destructive-foreground': '0 0% 89%; --border': '0 0% 35%; --input': '0 0% 35%; --ring': '206 90% 61%; }
.dark.set-1-palette-6 { --background': '0 0% 4%; --foreground': '0 0% 96%; --card': '0 0% 12%; --card-foreground': '0 0% 96%; --popover': '0 0% 12%; --popover-foreground': '0 0% 96%; --primary': '330 100% 50%; --primary-foreground': '0 0% 96%; --secondary': '0 0% 50%; --secondary-foreground': '0 0% 96%; --muted': '0 0% 50%; --muted-foreground': '0 0% 60%; --accent': '180 100% 50%; --accent-foreground': '0 0% 4%; --destructive': '0 100% 60%; --destructive-foreground': '0 0% 96%; --border': '0 0% 50%; --input': '0 0% 50%; --ring': '330 100% 50%; }
.dark.set-1-palette-7 { --background': '0 0% 13%; --foreground': '220 33% 95%; --card': '0 0% 16%; --card-foreground': '220 33% 95%; --popover': '0 0% 16%; --popover-foreground': '220 33% 95%; --primary': '210 79% 55%; --primary-foreground': '0 0% 13%; --secondary': '0 0% 38%; --secondary-foreground': '220 33% 95%; --muted': '0 0% 38%; --muted-foreground': '0 0% 70%; --accent': '45 100% 51%; --accent-foreground': '0 0% 13%; --destructive': '0 63% 50%; --destructive-foreground': '220 33% 95%; --border': '0 0% 38%; --input': '0 0% 38%; --ring': '210 79% 55%; }
.dark.set-1-palette-8 { --background': '240 14% 15%; --foreground': '220 100% 96%; --card': '240 11% 20%; --card-foreground': '220 100% 96%; --popover': '240 11% 20%; --popover-foreground': '220 100% 96%; --primary': '271 76% 53%; --primary-foreground': '220 100% 96%; --secondary': '240 4% 68%; --secondary-foreground': '220 100% 96%; --muted': '240 4% 68%; --muted-foreground': '240 4% 48%; --accent': '180 100% 50%; --accent-foreground': '240 14% 15%; --destructive': '11 100% 62%; --destructive-foreground': '220 100% 96%; --border': '240 4% 68%; --input': '240 4% 68%; --ring': '271 76% 53%; }
.dark.set-1-palette-9 { --background': '210 10% 15%; --foreground': '120 100% 98%; --card': '210 10% 20%; --card-foreground': '120 100% 98%; --popover': '210 10% 20%; --popover-foreground': '120 100% 98%; --primary': '134 61% 50%; --primary-foreground': '0 0% 100%; --secondary': '208 7% 35%; --secondary-foreground': '0 0% 100%; --muted': '208 7% 35%; --muted-foreground': '208 7% 60%; --accent': '211 100% 60%; --accent-foreground': '0 0% 100%; --destructive': '354 70% 64%; --destructive-foreground': '0 0% 100%; --border': '208 7% 35%; --input': '208 7% 35%; --ring': '134 61% 50%; }
}

5. src/app/layout.tsx Ensure the root layout wraps the children with the ThemeProvider.

import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';

const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const fontHeadline = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-headline',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>FlowPro Plumbing</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          fontBody.variable,
          fontHeadline.variable
        )}
      >
        <ThemeProvider>
          <TooltipProvider>
            <div className="relative flex min-h-screen flex-col">
               {/* Assuming you have a Header component where you can place the ThemeSwitcher */}
               <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

6. Integrate the ThemeSwitcher Finally, add the <ThemeSwitcher /> component to your src/components/layout/header.tsx file, or wherever you want it to appear in your UI.

// Example of adding it to a Header component
import { ThemeSwitcher } from '@/components/theme-switcher';

export default function Header() {
  return (
    <header>
      {/* ... other header content */}
      <ThemeSwitcher />
    </header>
  );
}
