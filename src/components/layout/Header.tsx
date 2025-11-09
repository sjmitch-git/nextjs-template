import { DefaultLinks, AppConfig } from '@/lib/config'
import { NavBar } from '@ui'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='header'>
      <div className='container max-w-screen-xl mx-auto'>
        <NavBar
          brand={AppConfig.title}
          brandSrc={`${process.env.NEXT_PUBLIC_BASE_URL}/logo.png`}
          links={DefaultLinks}
          navStyles='py-2 md:py-4 px-0 z-20 font-semibold test relative'
          btnColor='light'
          btnSize='lg'
          placement='top'
          btnLayout='circle'
          btnBackground='secondary'
        >
          <Nav />
        </NavBar>
      </div>
    </header>
  )
}

export default Header
