import type { Post } from '@types'
import { Hero } from '@layout'
import { PostsList } from '@features'
import { Alert, Breadcrumbs } from '@ui'

const title = 'Posts'
const description = 'List of posts fetched from the jsonplaceholder API'

export const metadata = {
  title: title,
  description: description,
}

export default async function PostsPage() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)

    if (!response.ok) {
      throw new Error('Failed to fetch posts')
    }

    const posts: Post[] = await response.json()

    return (
      <>
        <Breadcrumbs />
        <Hero
          title={title}
          description={description}
        />
        <PostsList initialPosts={posts} />
      </>
    )
  } catch (error) {
    return (
      <div className='py-8'>
        <Alert
          status='error'
          title='Error'
          message={
            error instanceof Error ? error.message : 'Failed to load posts'
          }
        />
      </div>
    )
  }
}
