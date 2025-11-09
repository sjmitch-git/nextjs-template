import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

type ParamsProps = {
  params: Promise<{ id: string }>
}

export async function GET(request: NextRequest, { params }: ParamsProps) {
  const { id } = await params
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        next: { revalidate: 600 },
      }
    )

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch data: ${response.statusText}` },
        { status: response.status }
      )
    }

    const data = await response.json()

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=30',
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
