'use client'

import { useEffect, useState } from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useDataContext } from '@lib/contexts/DataContext'
import { Post } from '@types'
import { Pagination } from '@ui'
import PostListItem from './PostsListItem'

interface PostsListProps {
  initialPosts: Post[]
}

export default function PostsList({ initialPosts }: PostsListProps) {
  const { posts, setPosts } = useDataContext()
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [currentPage, setCurrentPage] = useState('1')
  const [postsPerPage] = useState(12)

  useEffect(() => {
    if (initialPosts.length > 0 && posts.length === 0) {
      setPosts(initialPosts)
    }
  }, [initialPosts, posts, setPosts])

  useEffect(() => {
    const queryPage = searchParams.get('p') || '1'

    if (Number(queryPage) > 0) {
      setCurrentPage(queryPage)
    } else {
      setCurrentPage('1')
    }
  }, [searchParams])

  const indexOfLastPost = Number(currentPage) * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(posts.length / postsPerPage)

  const handlePageChange = (page: string) => {
    const pageNumber = parseInt(page, 10)

    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(page)
      const query = new URLSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        p: pageNumber.toString(),
      }).toString()
      router.push(`${pathname}?${query}`)
    }
  }

  return (
    <div className='space-y-8'>
      <ul className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {currentPosts.map(post => (
          <li key={post.id}>
            <PostListItem
              title={post.title}
              id={post.id}
              userId={post.userId}
            />
          </li>
        ))}
      </ul>

      {posts.length > postsPerPage && (
        <div className='pagination-wrapper'>
          {currentPosts.length !== 0 && (
            <Pagination
              page={currentPage}
              results={posts.length}
              range={postsPerPage}
              onChange={handlePageChange}
              btnShape='circle'
              gap='md'
              size='lg'
            />
          )}
        </div>
      )}
    </div>
  )
}
