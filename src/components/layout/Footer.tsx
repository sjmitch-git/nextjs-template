import Link from 'next/link'
import { DefaultLinks, AppConfig } from '@/lib/config'

function getYear() {
  return new Date().getFullYear()
}

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <nav aria-label='Footer navigation'>
          <ul className='flex flex-wrap gap-4 justify-center'>
            {DefaultLinks.map(
              (
                link: { href: string; name: string; title?: string },
                i: number
              ) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className='text-dark dark:text-light'
                    title={link.title || link.name}
                    prefetch={false}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
        <p className='text-sm mx-auto flex items-center justify-center gap-4'>
          Built with{' '}
          <a
            href='https://nextjs.org/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-primary-dark dark:text-primary-light nocontent'
            title='Visit Fluid UI website'
            aria-label='Visit Fluid UI website'
          >
            <img
              src='/fluid.png'
              alt='Fluid UI Logo'
              width={134}
              height={43}
            />
          </a>
        </p>
        <p className='copyright'>
          &copy; {getYear()}{' '}
          {AppConfig.author.url ? (
            <a
              href={AppConfig.author.url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary-dark dark:text-primary-light'
            >
              {AppConfig.author.name}
            </a>
          ) : (
            AppConfig.author.name
          )}
          . All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
