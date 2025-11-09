/**
 * @jest-environment node
 */

import { GET } from '../api/posts/[id]/route'
import type { NextRequest } from 'next/server'

describe('GET /api/posts/[id]', () => {
  const originalFetch = global.fetch

  beforeEach(() => {
    // @ts-ignore
    global.fetch = jest.fn()
  })

  afterEach(() => {
    // @ts-ignore
    global.fetch = originalFetch
  })

  it('fetches post by ID on success', async () => {
    const mockPost = { id: 1, title: 'Test Post', body: 'Hello' }

    // @ts-ignore
    global.fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => mockPost,
      headers: new Headers(),
    })

    const mockRequest = {} as NextRequest

    const res = await GET(mockRequest, { params: { id: '1' } })
    const data = await res.json()

    expect(res.status).toBe(200)
    expect(data).toEqual(mockPost)
    expect(global.fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts/1',
      expect.objectContaining({ next: { revalidate: 600 } })
    )
  })

  it('returns 404 when post not found', async () => {
    // @ts-ignore
    global.fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: 'Not Found',
    })

    const res = await GET({} as NextRequest, { params: { id: '999' } })
    const data = await res.json()

    expect(res.status).toBe(404)
    expect(data).toEqual({ error: 'Failed to fetch data: Not Found' })
  })
})
