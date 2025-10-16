import type { Post } from '@types'

const PostDetail = ({ post }: { post: Post }) => {
  return (
    <div>
      <p>{post.body}</p>
    </div>
  )
}

export default PostDetail
