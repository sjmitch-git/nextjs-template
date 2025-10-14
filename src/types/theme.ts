export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
