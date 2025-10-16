import { AppConfig } from '@lib/config'
import { Hero, Section, Aside } from '@layout'

const title = 'About'
const description = AppConfig.description

export const metadata = {
  title: title,
  description: description,
}

export default function AboutPage() {
  return (
    <>
      <Hero
        title={title}
        description={description}
      />
      <div className='content-wrap'>
        <div className='content'>
          <Section title='Welcome'>
            <p>
              This is a <strong>Next.js template project</strong> designed to
              help developers quickly bootstrap modern, scalable web
              applications. Built with Next.js, TypeScript, and best practices
              in mind, this template provides a solid foundation for creating
              high-performance websites and apps.
            </p>
          </Section>
          <Section title='Purpose'>
            <p>
              The goal of this template is to save you time and effort by
              providing a pre-configured, production-ready setup. Whether
              you&apos;re building a personal project, a portfolio, or a
              professional application, this template offers a clean structure,
              modern tooling, and flexibility to suit your needs.
            </p>
          </Section>
          <Section title='Features'>
            <ul className='list-disc list-inside'>
              <li>
                Next.js with App Router for optimized routing and performance
              </li>
              <li>TypeScript for type-safe development</li>
              <li>
                Pre-configured CSS support (e.g., CSS Modules, Tailwind, or your
                preferred styling)
              </li>
              <li>SEO-friendly setup with metadata and best practices</li>
              <li>
                Easy-to-extend structure for adding components, pages, and APIs
              </li>
            </ul>
          </Section>
          <Section title='Getting Started'>
            <p>
              Clone this repository from{' '}
              <a
                href='https://github.com/sjmitch-git/nextjs-template'
                target='_blank'
                rel='noopener noreferrer'
              >
                GitHub
              </a>{' '}
              and follow the setup instructions in the README to get started.
              Customize the template to fit your project&apos;s requirements,
              add your own components, and deploy with ease.
            </p>
          </Section>
          <Section title='Contribute'>
            <p>
              This is an open-source project, and contributions are welcome!
              Check out the{' '}
              <a
                href='https://github.com/your-username/your-repo/blob/main/CONTRIBUTING.md'
                target='_blank'
                rel='noopener noreferrer'
              >
                contribution guidelines
              </a>{' '}
              to report issues, suggest features, or submit pull requests.
            </p>
          </Section>
        </div>
        <Aside />
      </div>
    </>
  )
}
