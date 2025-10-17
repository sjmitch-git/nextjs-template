import { LinkGithub } from '@features'
import { SocialShare } from '@ui'

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <div className='sidebar-inner'>
        <SocialShare
          text='Check out this awesome site!'
          buttons={['X', 'Facebook', 'LinkedIn', 'Email']}
          btnShape='rounded'
          gap='md'
          size='lg'
          layout='horizontal'
          className='justify-around flex-row flex-wrap mx-auto'
        />
        <LinkGithub />
      </div>
    </aside>
  )
}

export default Sidebar
