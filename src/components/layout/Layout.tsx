import { Header, Footer } from '@layout'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className='main container max-w-screen-xl'>
        <article className='article'>{children}</article>
      </main>
      <Footer />
    </>
  )
}

export default Layout
