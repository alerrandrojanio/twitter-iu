import { createContext } from "react"

const ThemeContext = createContext()

interface useThemeProps {
  children: string
}

export function useTheme({ children }: useThemeProps) {
  return <ThemeContext.Provider>{children}</ThemeContext.Provider>
}
