import { MetaData } from '@/lib/config'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import '@styles/index.css'
import { GlobalProvider } from '@lib/contexts/GlobalContext'
import { Layout } from '@layout'
import { themeInitScript } from '@utils'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = MetaData

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        <Script
          id='theme-init'
          strategy='beforeInteractive'
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <GlobalProvider>
          <Layout>{children}</Layout>
        </GlobalProvider>
      </body>
    </html>
  )
}
