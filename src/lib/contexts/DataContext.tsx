'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

import type { Post, DataContextType } from '@types'

const DataContext = createContext<DataContextType | undefined>(undefined)

interface DataProviderProps {
  children: ReactNode
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([])

  return (
    <DataContext.Provider value={{ posts, setPosts }}>
      {children}
    </DataContext.Provider>
  )
}

export const useDataContext = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider')
  }
  return context
}
