import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'jest-circus'

afterEach(() => {
  cleanup()
})
