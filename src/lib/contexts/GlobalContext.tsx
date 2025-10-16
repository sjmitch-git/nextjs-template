'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from './ThemeContext'
import { UserProvider } from './UserContext'
import { DataProvider } from './DataContext'

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <UserProvider>
        <DataProvider>{children}</DataProvider>
      </UserProvider>
    </ThemeProvider>
  )
}
