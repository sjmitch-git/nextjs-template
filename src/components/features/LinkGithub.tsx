import { AppConfig } from '@/lib/config'
import { FaGithub } from 'react-icons/fa'

const LinkGithub = () => {
  return (
    <div className='flex justify-center'>
      <a
        href={AppConfig.githubRepo}
        target='_blank'
        rel='noopener noreferrer'
        className='btnLink mx-auto'
        title='Visit our GitHub repository'
        aria-label='Visit our GitHub repository'
      >
        <FaGithub size={24} />
        <span>GitHub Repo</span>
      </a>
    </div>
  )
}

export default LinkGithub
