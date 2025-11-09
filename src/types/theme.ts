export type Theme = 'light' | 'dark' | null

export interface ThemeContextType {
  theme: Theme
  toggleTheme: (e: React.ChangeEvent<HTMLInputElement>) => void
}
