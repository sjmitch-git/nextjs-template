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

async function extendedConfig() {
  const nextJestConfig = await createJestConfig(config)()
  nextJestConfig.transformIgnorePatterns =
    nextJestConfig.transformIgnorePatterns || []
  nextJestConfig.transformIgnorePatterns[0] = '/node_modules/(?!@smitch/fluid/)'
  return nextJestConfig
}

export default extendedConfig
