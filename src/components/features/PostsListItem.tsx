import { Post } from '@types'

import { Card, CardHeader, CardBody, CardFooter } from '@ui'

const PostListItem = ({ title, id, userId }: Post) => {
  return (
    <Card
      layout='col'
      shadow='none'
      rounded='lg'
      outline
      className='min-h-full border-neutral'
    >
      <CardBody className='flex-grow justify-between'>
        <CardHeader
          title={title}
          className='line-clamp-2'
        />
        <p className='text-right text-neutral text-sm mt-auto px-2'>
          User {userId}
        </p>
        <CardFooter
          link={`./posts/${id}`}
          linkLabel='View Post'
        />
      </CardBody>
    </Card>
  )
}

export default PostListItem
