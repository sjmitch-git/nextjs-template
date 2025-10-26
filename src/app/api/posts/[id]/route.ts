import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop()

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'force-cache',
      }
    )

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch post: ${response.statusText}` },
        { status: response.status }
      )
    }

    const data = await response.json()

    if (!data) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }

    return NextResponse.json(data, {
      headers: {
        'Cache-Control':
          'public, s-maxage=31536000, stale-while-revalidate=86400',
      },
    })
  } catch (error) {
    console.log('error', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
