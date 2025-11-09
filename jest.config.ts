import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'mjs', 'cjs'],
  clearMocks: true,
  transform: {
    '^.+\\.(ts|tsx|js|jsx|mjs|cjs)$': [
      'babel-jest',
      { configFile: '<rootDir>/babel.config.js' },
    ],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@types$': '<rootDir>/src/types/index',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@features$': '<rootDir>/src/components/features/index',
    '^@layout$': '<rootDir>/src/components/layout/index',
    '^@ui$': '<rootDir>/src/components/ui/index',
    '^@lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
  },
}

export default createJestConfig(config)
