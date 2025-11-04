import type { Metadata } from 'next'
import defaultLinks from './data/defaultLinks.json' assert { type: 'json' }

export const URLs = {
  base: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/',
}

export const AppConfig = {
  sitename: 'Next.js Template',
  title: 'Next.js Template',
  description:
    'A starter template for Next.js projects with Tailwind CSS and Breeze UI.',
  keywords: 'nextjs, reactjs, tailwindcss, breezeui, template, starter',
  author: {
    name: 'OBLONG',
    url: 'https://oblong.digital/',
  },
  organization: 'Oblong Digital',
  githubRepo: 'https://github.com/sjmitch-git/nextjs-template',
}

export const MetaData: Metadata = {
  title: {
    template: `%s | ${AppConfig.title}`,
    default: AppConfig.title,
  },
  description: AppConfig.description,
  keywords: AppConfig.keywords,
  authors: [
    {
      name: AppConfig.author.name,
      url: AppConfig.author.url,
    },
  ],
  metadataBase: new URL(URLs.base),
  alternates: {
    canonical: new URL(URLs.base),
  },
  twitter: {
    card: 'summary',
  },
  openGraph: {
    title: AppConfig.title,
    description: AppConfig.description,
    type: 'website',
    siteName: AppConfig.sitename,
  },
  other: {
    'theme-color': '#000000',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': AppConfig.sitename,
  },
}

export const DefaultLinks = defaultLinks
