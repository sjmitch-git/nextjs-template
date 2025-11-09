/**
 * @jest-environment node
 */

import { GET } from '../api/posts/route'

interface GlobalWithFetch {
  fetch: jest.Mock
}

const globalWithFetch = global as unknown as GlobalWithFetch

describe('GET /api/posts', () => {
  const originalFetch = globalWithFetch.fetch

  beforeEach(() => {
    globalWithFetch.fetch = jest.fn()
  })

  afterEach(() => {
    globalWithFetch.fetch = originalFetch
  })

  it('returns data on success', async () => {
    globalWithFetch.fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => [{ id: 1, title: 'Test' }],
      headers: new Headers(),
    } as Response)

    const res = await GET()
    const data = await res.json()

    expect(res.status).toBe(200)
    expect(data).toEqual([{ id: 1, title: 'Test' }])
  })

  it('returns error on non-200', async () => {
    globalWithFetch.fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: 'Not Found',
      json: async () => ({}),
    } as Response)

    const res = await GET()
    const data = await res.json()

    expect(res.status).toBe(404)
    expect(data).toEqual({ error: 'Failed to fetch data: Not Found' })
  })
})
