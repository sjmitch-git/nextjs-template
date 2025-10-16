interface Post {
  id?: number
  title: string
  body?: string
  userId?: number
}

interface DataContextType {
  posts: Post[]
  setPosts: (posts: Post[]) => void
}

export type { Post, DataContextType }
