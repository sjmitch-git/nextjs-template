import { ToggleTheme } from '@features'

const Nav = () => {
  return (
    <div className='flex items-center gap-3 md:gap-4'>
      <ToggleTheme />
    </div>
  )
}

export default Nav
