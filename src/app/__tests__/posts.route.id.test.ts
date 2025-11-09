/**
 * @jest-environment node
 */

import { GET } from '../api/posts/[id]/route'
import type { NextRequest } from 'next/server'

type ParamsProps = {
  params: Promise<{ id: string }>
}

// Helper – exact shape the route expects
const makeContext = (id: string): ParamsProps => ({
  params: Promise.resolve({ id }),
})

describe('GET /api/posts/[id]', () => {
  const originalFetch = global.fetch

  beforeEach(() => {
    global.fetch = jest.fn()
  })

  afterEach(() => {
    global.fetch = originalFetch
  })

  it('fetches post by ID on success', async () => {
    const mockPost = { id: 1, title: 'Test Post', body: 'Hello' }

    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => mockPost,
      headers: new Headers(),
    } satisfies Partial<Response>)

    const mockRequest = {} as NextRequest

    const res = await GET(mockRequest, makeContext('1'))
    const data = await res.json()

    expect(res.status).toBe(200)
    expect(data).toEqual(mockPost)
    expect(global.fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts/1',
      expect.objectContaining({ next: { revalidate: 600 } })
    )
  })

  it('returns 404 when post not found', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: 'Not Found',
    } satisfies Partial<Response>)

    const res = await GET({} as NextRequest, makeContext('999'))
    const data = await res.json()

    expect(res.status).toBe(404)
    expect(data).toEqual({ error: 'Failed to fetch data: Not Found' })
  })
})
