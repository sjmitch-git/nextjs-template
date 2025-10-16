'use client'

import { useEffect, useState } from 'react'
import { useDataContext } from '@lib/contexts/DataContext'
import { Post } from '@types'
import { Pagination } from '@ui'
import PostListItem from './PostsListItem'

interface PostsListProps {
  initialPosts: Post[]
}

export default function PostsList({ initialPosts }: PostsListProps) {
  const { posts, setPosts } = useDataContext()
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12)

  useEffect(() => {
    if (initialPosts.length > 0 && posts.length === 0) {
      setPosts(initialPosts)
    }
  }, [initialPosts, posts, setPosts])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(posts.length / postsPerPage)

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber)
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
              page={currentPage.toString()}
              results={posts.length}
              range={postsPerPage}
              onChange={handlePageChange}
              btnShape='circle'
              gap='md'
              size='md'
            />
          )}
        </div>
      )}
    </div>
  )
}
