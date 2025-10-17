import { Metadata } from 'next'
import type { Post } from '@types'
import { Hero } from '@layout'
import { Alert, Breadcrumbs } from '@ui'
import { titleCase } from '@smitch/js-lib'
import { AppConfig } from '@lib/config'
import { PostDetail } from '@features'

type ParamsProps = {
  params: Promise<{ id: string }>
}

const fetchPostData = async (id: string): Promise<Post> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`)

  if (!response.ok) {
    throw new Error(`Failed to fetch post with id ${id}`)
  }
  const post: Post = await response.json()
  return post
}

export async function generateMetadata({
  params,
}: ParamsProps): Promise<Metadata | null> {
  const { id } = await params

  try {
    const post = await fetchPostData(id)

    if (!post) {
      return null
    }

    const title = titleCase(post.title)
    const description = `Author: User ${post.userId}`

    return {
      title: title,
      description: description,
      openGraph: {
        title: title,
        description: description,
        type: 'website',
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${id}`,
      },
    }
  } catch (err: unknown) {
    console.log('Error fetching post data for metadata:', err)
    return null
  }
}

export default async function PostDetailPage({ params }: ParamsProps) {
  const { id } = await params

  let post: Post | null = null
  let jsonLd: Record<string, unknown> | null = null

  try {
    post = await fetchPostData(id)

    const title = titleCase(post.title)
    const description = `Author: User ${post.userId}`

    jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      name: title,
      headline: title,
      description: description,
      author: {
        '@type': 'Person',
        name: post.userId,
      },
      publisher: {
        '@type': 'Organization',
        name: AppConfig.organization,
      },
      datePublished: '2025-10-16',
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/post/${id}`,
    }

    return (
      <>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Breadcrumbs activeLabel='Post' />
        <Hero
          title={title}
          description={description}
        />
        <PostDetail post={post} />
      </>
    )
  } catch (error) {
    return (
      <div className='py-8'>
        <Alert
          status='error'
          title='Error'
          message={
            error instanceof Error ? error.message : 'Failed to load post'
          }
        />
      </div>
    )
  }
}
