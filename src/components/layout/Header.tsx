import { DefaultLinks, AppConfig } from '@/lib/config'
import { NavBar } from '@ui'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='header'>
      <NavBar
        brand={AppConfig.title}
        brandSrc={`${process.env.NEXT_PUBLIC_BASE_URL}/logo.png`}
        links={DefaultLinks}
        navStyles='p-2 md:p-4 shadow-lg dark:shadow-black z-20 font-semibold test relative'
        btnColor='light'
        btnSize='lg'
        placement='top'
        btnLayout='circle'
        btnBackground='secondary'
      >
        <Nav />
      </NavBar>
    </header>
  )
}

export default Header
